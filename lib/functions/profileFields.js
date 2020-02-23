module.exports = (req)=> {
  fields = {};
  if(req.body.type) fields.type = req.body.type;
  if(req.body.describe) fields.describe = req.body.describe;
  if(req.body.income) fields.income = req.body.income;
  if(req.body.expend) fields.expend = req.body.expend;
  if(req.body.cash) fields.cash = req.body.cash;
  if(req.body.remark) fields.remark = req.body.remark;
  return fields;
}