export const config = {
  runtime: 'nodejs',
};

import soap from 'soap';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing auction ID" });
  }

  const wsdl = 'https://api.tradera.com/v3/publicservice.asmx?WSDL';

  try {
    const client = await soap.createClientAsync(wsdl);
    const [result] = await client.GetItemsInformationAsync({
      itemIds: { long: [parseInt(id)] }
    });

    let item = result.GetItemsInformationResult.Items.Item;

    // Om det returneras en lista (array), ta första objektet
    if (Array.isArray(item)) {
      item = item[0];
    }

    const title = item.Title || '';
    const numberOfBids = item.NumberOfBids || 0;
    const currentPrice = item.CurrentPrice?.Amount || item.CurrentPrice || 0;
    const endTime = item.EndTime || null;

    return res.status(200).json({
      auctionId: id,
      title,
      numberOfBids,
      currentPrice,
      endTime
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch from Tradera" });
  }
}
