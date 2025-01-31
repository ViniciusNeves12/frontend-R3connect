import React, { useEffect } from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Grid, Typography, } from '@material-ui/core';
import './Home.css';
import TabProduto from '../../componentes/produto/tabProduto/TabProduto';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'
import ModalProduto from '../../componentes/produto/modalProduto/ModalProduto'



function Home() {

  let navigate = useNavigate()
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  }));

  function produtos() {
    navigate('/listarProduto')
  }

  const classes = useStyles();

  return (

    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Encontre diversos produtos e soluções sustentáveis aqui.</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalProduto />
            </Box>
            <Button onClick={produtos} variant="outlined" className="botao">Ver Produtos</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://i.imgur.com/RgQcsNy.png" alt="logo" />
        </Grid>
        <Grid xs={12} className="produto">
          <TabProduto />
        </Grid>




      </Grid>
    </>
  );
}

export default Home;