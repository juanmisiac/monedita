type Props = {
  class: string
  dolarType: string
  buyValue: number
  sellValue: number
}

export const Valores = (props: Props) => {
  return (
    <div className={props.class}>
      <h2 className="font-bold mb-1">{props.dolarType}</h2>
      <div className="text-right flex flex-row sm:flex-col mb-1">
        <p className="me-6 sm:me-0">Compra: <span className="font-medium">{props.buyValue}</span></p>
        <p>Venta: <span className="font-medium">{props.sellValue}</span></p>
      </div>
    </div>
  )
}
