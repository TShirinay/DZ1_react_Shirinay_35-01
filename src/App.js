import React from 'react';

const  Title = () => {
    return (
        <>
            <p>"Hello world"</p>
        </>
    );
};

const Header = () => {
  return (
      <>
        <p>"Header</p>
        <Title/>
      </>
  );
};

const Content = () => {
  return (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut id illum ipsa laborum, molestias porro quaerat quasi saepe. Commodi dicta excepturi illum, ipsam molestiae praesentium quia quo quos recusandae.
        </p>
        <Title/>
      </>
  );
};

const Footer = () => {
  return (
      <>
        <p>"Footer"</p>
        <Title/>
      </>
  );
};



export default function App(){
  return(
      <>
        <Header/>
        <Content/>
        <Footer/>
      </>
  )
}