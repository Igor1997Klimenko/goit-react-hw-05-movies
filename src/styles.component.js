import styled from "@emotion/styled";

export const SubmitLink = styled.button`
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
`;

export const Homecomponent = styled.div`
    background: #004fff3d;
    padding: 10px;
    display: flex;
    box-shadow: 0px 5px 7px -6px #000000, 5px 5px 15px 5px rgb(0 0 0 / 0%);
`;

export const BackButton = styled.button`
    text-decoration: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 5px 40px;
    margin: 10px 0;
    border-radius: 0 40px 40px 0px;
    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
    background-position: 100% 0;
    background-size: 200% 200%;
    font-family: 'Montserrat',sans-serif;
    font-size: 14px;
    font-weight: 300;
    border: none;
    color: white;
    box-shadow: 0 16px 32px 0 rgb(0 40 120 / 35%);
    transition: .5s;

  &:hover{
      box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
      background-position: 0 0;
  }
`;

export const FormSearch = styled.form`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const InputSearch = styled.input`
    padding: 10px;
    border-radius: 20px 0px 0px 20px;
    border-color: #0058ff54;
    outline: none;
    border-right: transparent;
`;

export const ButtonSubmit = styled.button`
    background: #51c7ff;
    border-color: #0058ff54;
    border-radius: 0 20px 20px 0;
    border-left: transparent;
    cursor: pointer;
    color: #001ca7;
    font-weight: 700;

        &:hover{
            background: #25b9ff;
            transition: 0.5s;
            color: #0023d1;
        }
`;

export const CardMovie = styled.div`
    display: flex;
    margin: 15px 0;
    box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925, 5px 5px 15px 5px rgba(0,0,0,0);
`;

export const InfoMovie = styled.div`
    margin: 0 15px;
`;

export const ListCast = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: flex-start;
`;

export const ItemCast = styled.li`
    display: flex;
    flex-direction: column;
    box-shadow: 4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17, 5px 5px 15px 5px rgba(0,0,0,0);
    width: min-content;
    padding: 10px;
    margin: 25px;
`;

export const Additional = styled.h3`
    text-align: center;
    text-transform: uppercase;
        color: rgba(0,0,0,0.6);
    text-shadow: 2px 8px 6px rgb(0 0 0 / 20%), 30px -5px 35px rgb(255 255 255 / 30%);
`;

export const StrongerList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    margin-left: 20px;
`;

export const LinkIdCast = styled.li`
    display: flex;
    margin-left: 5px;
`;

export const VariableSton = styled.button`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding: 15px 30px;
  border: 1px solid;
  border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 2px;
  transition: .8s cubic-bezier(.165, .84, .44, 1);

        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 0;
            width: 100%;
            z-index: -1;
            color: white;
            background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
            transition: .8s cubic-bezier(.165, .84, .44, 1);
    }

    &:hover {
  background: rgba(255, 255, 255, 0);
}
&:hover:before {
  bottom: 0%;
  top: auto;
  height: 100%;
}
`;

export const NotReviews = styled.span`
font-size: 80px;
    color: #fff;
    padding: 40px 0;
    letter-spacing: -7px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    display: block;
    animation: blur 3s ease-out infinite;
    text-shadow: 0px 0px 5px #b71111, 0px 0px 7px #c54c30;

  @keyframes blur {
  from {
    text-shadow:0px 0px 10px #fff,
      0px 0px 10px #fff, 
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 50px #fff,
      0px 0px 50px #fff,
      0px 0px 50px #7B96B8,
      0px 0px 150px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px -10px 100px #7B96B8,
      0px -10px 100px #7B96B8;
  }
}
`;