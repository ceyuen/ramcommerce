export default function compilePromotionStatement (promoDetails) {
  let promoAmtStr;

  if (promoDetails.promotionType === 'ValueOff') {
    promoAmtStr = `$${promoDetails.promoAmt}`;
  } else if (promoDetails.promotionType === 'PercentOff') {
    promoAmtStr = `${promoDetails.promoAmt}%`;
  } else {
    // if promotion type is not standard, split promotion type by uppercase letters}
    promoAmtStr = `${promoDetails.promoAmt} ${promoDetails.promotionType.split(/(?=[A-Z])/).join(" ")}`;
  }

  return `${promoAmtStr} off entire order with minimum purchase of $${promoDetails.minimumOrderValue}!`
}