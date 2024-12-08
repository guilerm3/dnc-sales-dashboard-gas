import { Header, CardComponent, CustomChart, CustomTable, AvatarList } from "../components"
import { Container } from "@mui/material"
import { currencyConverter } from "../utils";

function Home(){
    const mockListData = [
      {
        avatar: "/dnc-avatar.svg",
        name: "Nome Sobrenome 1",
        subtitle: currencyConverter(1234.54),
      },
      {
        avatar: "/dnc-avatar.svg",
        name: "Nome Sobrenome 2",
        subtitle: currencyConverter(42345.54),
      },
      {
        avatar: "/dnc-avatar.svg",
        name: "Nome Sobrenome 3",
        subtitle: currencyConverter(5555.54),
      },
    ]

    const mockTableData = {
        headers: ['Name', 'Email', 'Actions'],
        rows: [
            [
                <span>Nome1</span>,
                <span>nome1@hotmail.com</span>,
                <button>ACTION</button>,
            ],
            [
                <span>Nome2</span>,
                <span>nome2@hotmail.com</span>,
                <button>ACTION</button>,
            ],
            [
                <span>Nome3</span>,
                <span>nome3@hotmail.com</span>,
                <button>ACTION</button>,
            ],
        ]
    }

    return (
      <>
        <Header />
        <Container maxWidth="lg">
          <CardComponent>CARD</CardComponent>
          <CardComponent>
            <AvatarList listData={mockListData} />
          </CardComponent>
          <CardComponent>
            <CustomTable headers={mockTableData.headers} rows={mockTableData.rows}/>
          </CardComponent>
          <CardComponent>
            <CustomChart 
              labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']} 
              data={[1000.12, 2456.54, 986.32, 654.89, 754.89, 354.89]} 
              type='line' 
            />
          </CardComponent>
        </Container>
      </>
    );
}

export default Home