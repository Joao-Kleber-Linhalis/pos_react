import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import FlatComponent from './components/FlatComponent';
import {View} from 'react-native';

const MovieList = () => {

  const data = [
    {
      key: '0',
      filme: 'A Origem',
      ano: 2010,
      estilo: 'Ficção Científica',
      direcao: 'Christopher Nolan',
      imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/87/32/31/20028688.jpg',
      descricao: 'Um ladrão que rouba segredos corporativos usando tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.'
    },
    {
      key: '1',
      filme: 'Matrix',
      ano: 1999,
      estilo: 'Ação',
      direcao: 'Lana Wachowski, Lilly Wachowski',
      imagem: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG',
      descricao: 'Um hacker de computador descobre de rebeldes misteriosos sobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.'
    },
    {
      key: '2',
      filme: 'Os Bons Companheiros',
      ano: 1990,
      estilo: 'Drama',
      direcao: 'Martin Scorsese',
      imagem: 'https://br.web.img2.acsta.net/medias/nmedia/18/93/46/41/20258439.jpg',
      descricao: 'Dois homens presos se unem ao longo dos anos, encontrando consolo e eventual redenção através de atos de decência comum.'
    },
    {
      key: '3',
      filme: 'Interestelar',
      ano: 2014,
      estilo: 'Aventura',
      direcao: 'Christopher Nolan',
      imagem: 'https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg',
      descricao: 'Uma equipe de exploradores viaja por um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.'
    },
    {
      key: '4',
      filme: 'O Cavaleiro das Trevas',
      ano: 2008,
      estilo: 'Ação',
      direcao: 'Christopher Nolan',
      imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/57/96/20121842.jpg',
      descricao: 'Quando a ameaça conhecida como o Coringa emerge de seu passado misterioso, ele causa caos e destruição na cidade de Gotham.'
    }
  ];
  

  return (
    <View>
      <FlatList data={data} renderItem={({item}) => <FlatComponent data={item} />}></FlatList>
    </View>
  );
};

export default MovieList;
