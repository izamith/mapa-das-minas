<p align="center">
<img src="https://github.com/izamith/mapa-das-minas/blob/a28eb847cdea8177d87500990b6f49353f194f8f/assets/logo.png" width="150">
  </p>
  
##### Skateparks podem ser lugares hostis para as garotas brasileiras que praticam a modalidade aggressive nos patins quad. O MAPA DAS MINAS partiu da ideia da @haoleskater no Instagram de mapear essas mulheres e incentivar que ocupem as pistas juntas! 
##### A ideia dela nasceu como um post no Instagram que reuniu mais de 129 garotas dispostas a desenvolver cada vez mais a comunidade participando do mapeamento. O post tem limite de caracteres, mas as minas não tem!!
##### Por isso, a PISCINA DE PIXEL resolveu levar o mapeamento para uma plataforma do tamanho do Brasil, através de um mapa digital em expansão constante, com identidade e linguagem próprias, igual à essa comunidade. 
#### VAMOS INVADIR AS PISTAS, VOCÊ NÃO PRECISA ANDAR SOZINHA🤘

#### [Acesse!](https://izamith.github.io/mapa-das-minas/)

------------

## Dados
* Coletamos os dados (usuário no instagram e estado) das meninas interessadas; <br>
Essa etapa foi iniciamente feita através de comentários em um post. Com a evolução do projeto, adotei um google forms.
* Exportei os dados do forms para .csv
* Criação de outro .csv para relacionar estados com coordenadas geográficas; <br>
Para fazer essa etapa usei o compilado [Coordenadas dos estados do brasil (centralizado, não capitais)](https://gist.github.com/ricardobeat/674646) 
* Relacionei cada menina à um estado e suas coordenadas em um objeto;

## Mapa
* Criei um tileset seguindo a identidade visual do projeto para o mapa no [MapBox Studio](https://studio.mapbox.com)
<img src="https://github.com/izamith/mapa-das-minas/blob/f1fe74c34523eb750fad105470de49ff7b6064c2/assets/cap1.png" width="700"> 

* As estapas seguintes foram relacionar a geolocalização com a quantidade de meninas no mesmo estado em CLUSTERS, conjuntos de indicadores que estão dentro do mesmo raio pré-definido. Meninas no mesmo estado tem as mesmas coordenadas porque cada estado tem o seu ponto central e eu ainda não fiz divisões por zonas e cidades. Por isso, o raio pode ser mínimo. <br>
![alt text](https://media.giphy.com/media/3StCX58zlgCqc8UCX0/giphy.gif)


 ## Roadmap
 * Adicionar upload de fotos e exibição no mapa;
 * Divisão por cidades e zonas (zl, zo, zn..);
 * Adicionar e filtrar por modalidades;
 * Menu de selecionar estado;
 * ˜Popup de dúvidas do que é o patins quad˜;
 
