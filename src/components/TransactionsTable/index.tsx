import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  
  // index.tsx -> createServer()
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website Development</td>
            <td className="deposit">$2500.00</td>
            <td>Work</td>
            <td>01/22/2022</td>
          </tr>
          <tr>
            <td>Hamburger</td>
            <td className="withdraw">-$40.00</td>
            <td>Food</td>
            <td>01/25/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
