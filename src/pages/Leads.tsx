/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";

//COMPONENTS
import {
  CardComponent,
  Header,
  StyledH2,
  StyledButton,
  FormComponent,
  CustomTable,
  StyledP,
  StyledSpan,
} from "../components";
import { Container, Grid } from "@mui/material";

//HOOKS
import { useFormValidation, useGet, usePost, useDelete } from "../hooks";

//TYPES
import { InputProps, LeadsData, LeadsPostData, MessageProps } from "../types";

function Leads() {

  //HOOKS

  const {
    data: createLeadsData,
    loading: createLeadsLoading,
    error: createLeadsError,
    postData: createLeadsPostData,
  } = usePost<LeadsData[], LeadsPostData>("leads/create", true);

  const {
    data: leadsData,
    loading: leadsLoading,
    error: leadsError,
    getData: getLeads,
  } = useGet<LeadsData[]>("leads");

  const { deleteData: leadsDeleteData, loading: leadsDeleteLoading } =
    useDelete("leads/delete");

  //FORM

  const inputs: InputProps[] = [
    { name: "name", type: "text", placeholder: "Nome", required: true },
    { name: "email", type: "email", placeholder: "Email", required: true },
    { name: "phone", type: "tel", placeholder: "Telefone", required: true },
  ];
  const { formValues, formValid, handleChange } = useFormValidation(inputs);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createLeadsPostData({
      name: String(formValues[0]),
      email: String(formValues[1]),
      phone: String(formValues[2]),
    });
  };

  const handleDelete = async (id: number) =>{
    if (
      confirm (
        'Tem certeza que deseja excluir seu lead?'
      ) === true
    ) {
      try{
        await leadsDeleteData({params: {id: id}})
        alert('Lead deletado com sucesso!')
        getLeads();
      }catch (e) {
        alert('Não foi possível realizar a operação. Entre em contato com nosso suporte')
      }
    }
  }

  const [createMessage, setCreateMessage] = useState<MessageProps>({
    type: "success",
    msg: "",
  });

  const clearMessage = () => {
    setTimeout(() => {
      setCreateMessage({
        type: "success",
        msg: "",
      });
    }, 3000);
  }

  useEffect(()=>{
    if (createLeadsData?.id){
      setCreateMessage({
        msg:'Lead Criado com sucesso',
        type: 'success'
      })
      getLeads()
      clearMessage()
    }else if (createLeadsError){
      setCreateMessage({
        msg: "Não foi possível realizar a operação. Entre em contato com nosso suporte",
        type: 'error'
      })
    }else{
      clearMessage()
    }
  },[createLeadsData, createLeadsError])

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            <CardComponent className={leadsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
              {
                !leadsError && !leadsLoading && (
                  <>
                  <StyledH2 className="mb-1">Meus leads</StyledH2>
                  {leadsData?.length ? (
                    <CustomTable
                      headers={["Nome", "Email", "Telefone", ""]}
                      rows={leadsData.map((lead: any) => [
                        <StyledP>{lead.name}</StyledP>,
                        <StyledP>{lead.email}</StyledP>,
                        <StyledP>{lead.phone}</StyledP>,
                        <StyledButton className="borderless-alert" onClick={()=> handleDelete(lead.id)} disabled={leadsDeleteLoading}>Excluir</StyledButton>
                      ])}
                    />
                  ) : (
                    <StyledSpan>Sem leads cadatrados</StyledSpan>
                  )}
                  </>
                )
              }
            </CardComponent>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CardComponent>
              <StyledH2 className="mb-1">Cadastrar leads</StyledH2>
              <FormComponent
                inputs={inputs.map((input, index) => ({
                  ...input,
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || "",
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: "primary",
                    disabled: !formValid || createLeadsLoading || leadsDeleteLoading,
                    type: "submit",
                    onClick: handleSubmit,
                    children: "Cadastrar leads",
                  },
                ]}
                message={createMessage}
              />
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Leads;
