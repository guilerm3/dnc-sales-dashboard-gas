import { Header, CardComponent, CustomTable, AvatarList } from "../components"
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
        </Container>
      </>
    );
}

export default Home