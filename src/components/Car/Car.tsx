import { CompleteCarInfo } from "../../interfaces/interfaceCar";
import CarStyled from "./CarStyled";

interface CarProps {
  car: CompleteCarInfo;
}

const CarCard = ({
  car: { brand, model, period, cc, cylinders, fuel, kw, cvf, cv, value },
}: CarProps): JSX.Element => {
  return (
    <CarStyled>
      <table className="table__container" data-testid="table">
        <thead>
          <tr>
            <th className="table__heading">Vehicle data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brand</td>
            <td>{brand}</td>
          </tr>
          <tr>
            <td>Model</td>
            <td>{model}</td>
          </tr>
          <tr>
            <td>Displacement</td>
            <td>{cc}</td>
          </tr>
          <tr>
            <td>Cylinders</td>
            <td>{cylinders}</td>
          </tr>
          <tr>
            <td>Fuel</td>
            <td>{fuel}</td>
          </tr>
          <tr>
            <td>Power (KW)</td>
            <td>{kw}</td>
          </tr>
          <tr>
            <td>Fiscal strenght</td>
            <td>{cvf}</td>
          </tr>
          <tr>
            <td>Power (CV)</td>
            <td>{cv}</td>
          </tr>
        </tbody>
      </table>
    </CarStyled>
  );
};

export default CarCard;
