import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 320px;
  width: 340px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
    height: 300px;
    width: 300px;
    padding: 10px;
    display: flex;
    justify-content: center;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  filter: brightness(70%);
  cursor: pointer;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const ArtistCard = ({ item }) => {
    return (
        <Container>
            <CardContainer>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                </Info>
            </CardContainer>
        </Container>
    );
};

export default ArtistCard;