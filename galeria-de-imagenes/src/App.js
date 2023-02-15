import Header from './components/header';
import Card from './components/card';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



function App() {

  return (
    <div className='galeria'>
      <Header title="Galería de Imagénes con React" />

      <div className='cards'>
        <Card imgsrc="https://images.hola.com/imagenes/decoracion/20211013197604/cultivar-tulipanes-plantas-interior-exterior-il/1-6-262/cultivar-tulipanes-09a-a.jpg?tx=w_200"
          titulo="Tulipanes"
          descripcion="Los tulipanes son todo un género de plantas bulbosas que pertenece a la familia de las Liliaceae"
        />
        <Card imgsrc="http://florflores.com/wp-content/uploads/gazania-200x300.jpg"
          titulo="Gazania"
          descripcion="Gazania es un género de plantas herbáceas perteneciente a la familia Asteraceae"
        />
        <Card imgsrc="https://i0.wp.com/sloatgardens.com/wp-content/uploads/2014/04/Gardenia_jasminoides_Kleims_Hardy2.jpg?fit=200%2C300&ssl=1"
          titulo="Gardenias"
          descripcion="Las gardenias son unas plantas de la familia de las rubiáceas originarias de China"
        />
        <Card imgsrc="https://cdn.shopify.com/s/files/1/0550/1317/9586/products/GalleryArtDeco_300x300.jpg?v=1638891431"
          titulo="Dahlia"
          descripcion="Dahlia es un género de plantas herbáceas perennes tupidas, tuberosas, nativas de México y América Central."
        />
        <Card imgsrc="https://i.pinimg.com/236x/8d/a6/5a/8da65a47cdba657cd0f609bf579c8a9e.jpg"
          titulo="Cala o Alcatraz"
          descripcion="Es una planta perenne herbácea de origen sudafricano, de la familia de las aráceas"
        />
        <Card imgsrc="https://i.pinimg.com/200x/2d/a7/12/2da712365f1afde02264cc72f4d374b5.jpg"
          titulo="Rosas"
          descripcion="El género Rosa está compuesto por un conocido grupo de arbustos generalmente espinosos y floridos representantes principales de la familia de las rosáceas"
        />   
      </div> 
      <Footer
      texto= "Imagenes de flores y su descripción"
      />
    </div>
  );
}

export default App;
