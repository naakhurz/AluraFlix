import styled from "styled-components";
import banner from '../../assets/img/banner.jpg'
import { Boton, ContenidoParcial } from "../UI/Estilos";

const Anuncio = styled.div`
    background-image: linear-gradient(0deg, ${({theme}) => theme.oscuro} 0%, rgba(0,0,0,0) 100%),
    url(${banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const AnuncioContenido = styled(ContenidoParcial)`
    height: 300px;
    @media screen and (min-width: 1024px) {
        height: 400px;
        display: flex;
        justify-content: space-between;
        padding: 5rem 0;
    }
`;

const AnuncioDescripcion = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    color: ${({theme}) => theme.texto};
    padding: 1rem 0;
    box-sizing: border-box;
    text-align: center;
    @media screen and (min-width: 1024px) {
        width: 40%;
        text-align: left;
        align-items: flex-start;
    }
`;

const AnuncioTitulo = styled.h1`
    font-size: ${({theme}) => theme.h1};
    font-weight: 700;
    margin-bottom: 1rem;
`;

const AnuncioDetalle = styled.p`
    display: none;
    @media screen and (min-width: 768px) {
        display: initial;
        margin-bottom: 1rem;
    }
    @media screen and (min-width: 1024px) {
    }
`;

const AnuncioLink = styled.a`
    display: none;
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {
        display: initial;
        width: calc(40% - 1rem);
        height: auto;
        align-self: flex-end;
    }
`;

const AnuncioImagen = styled.img`
    width: 100%;
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {

    }
`;

const AnuncioBoton = styled(Boton)`
    text-decoration: none;
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export function Banner() {

    return (
        <Anuncio>
            <AnuncioContenido>
                <AnuncioDescripcion>
                    <AnuncioTitulo>AluraFlix</AnuncioTitulo>
                    <AnuncioDetalle>Bienvenidos al portal de los animes, series y peliculas de todos los tiempos.</AnuncioDetalle>
                    <AnuncioBoton tipo='completo' color='#fff' href="#" >Ver</AnuncioBoton>
                </AnuncioDescripcion>
                <AnuncioLink href="https://youtu.be/CYcrmsdZuyw?si=JJhx_Heh4ob-122m" target="__blank">
                    <AnuncioImagen src='https://www.db-z.com/wp-content/uploads/2023/10/Enfants-Dragon-Ball-Daima-1080x809.webp' />
                </AnuncioLink>
            </AnuncioContenido>
        </Anuncio>
    );
}