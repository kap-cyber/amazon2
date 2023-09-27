const FormatPrice = ({price}) => {
  return Intl.NumberFormat("en-IN",{
    style:"currency",
    currency:"INR",
    maximumFractionDigit:2
  }).format(price/60);
}

export default FormatPrice;
