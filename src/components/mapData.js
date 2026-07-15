import placeImage from '../assets/background-02.jpg'
import episodeImage from '../assets/background.jpg'

//집사진
import shinchanHouse from '../assets/house.png'
import chulsooHouse from '../assets/house02.png'
import parkImage from '../assets/house06.png'
import kindergartenImage from '../assets/house04.jpg'
import apartmentImage from '../assets/house03.jpg'
import neighborHouse from '../assets/house05.png'
import boHouse from '../assets/house07.png'


// 캐릭터 사진
import character01 from '/character/character-01.png'
import character02 from '/character/character-02.png'
import character03 from '/character/character-03.png'
import character04 from '/character/character-04.png'
import character05 from '/character/character-05.png'
import character06 from '/character/character-06.png'
import character07 from '/character/character-07.png'
import character08 from '/character/character-08.png'
import character09 from '/character/character-09.png'
import character10 from '/character/character-10.png'
import character11 from '/character/character-11.png'
import character12 from '/character/character-12.png'
import character13 from '/character/character-13.png'
import character14 from '/character/character-14.png'
import character15 from '/character/character-15.png'
import character16 from '/character/character-16.png'
import character17 from '/character/character-17.png'
import character18 from '/character/character-18.png'
import character19 from '/character/character-19.png'
import character20 from '/character/character-20.png'
import character21 from '/character/character-21.png'
import character22 from '/character/character-22.png'
import character23 from '/character/character-23.png'
import character24 from '/character/character-24.png'
import character25 from '/character/character-25.png'
import character26 from '/character/character-26.png'
import character27 from '/character/character-27.png'
import character28 from '/character/character-28.png'
import character29 from '/character/character-29.png'
import character30 from '/character/character-30.png'
import character31 from '/character/character-31.png'

//에피소드 사진
const episodeHouse01 = episodeImage
const episodeHouse02 = placeImage

export const mapData = [
  {
    id: 'shinchan-house',
    name: '짱구네 집',
    icon: '🏠',
    summary: '짱구 가족이 살고 있는 떡잎마을의 집이에요!',
    image: shinchanHouse,

    position: {
      top: '42%',
      left: '50%'
    },

    characters: [
      {
        name: '신짱구',
        image: character01
      },
      {
        name: '봉미선',
        image: character14
      },
      {
        name: '신형만',
        image: character15
      },
      {
        name: '신짱아',
        image: character08
      },
      {
        name: '흰둥이',
        image: character07
      }
    ],

    description:
      '엉뚱한 짱구와 잔소리 대마왕 미선 씨, 듬직한 아빠 형만 씨, 귀여운 짱아와 흰둥이가 함께 사는 따뜻하고 시끌벅적한 집이에요. 오늘도 짱구의 기발한 장난이 시작됩니다!',

    features: [
      {
        icon: '💗',
        text: '가족의 소중한 일상이 펼쳐지는 공간'
      },
      {
        icon: '🍫',
        text: '초코비가 항상 준비되어 있는 곳'
      },
      {
        icon: '🐶',
        text: '흰둥이의 편안한 보금자리'
      },
      {
        icon: '🛋️',
        text: '짱구가 장난감으로 어지르는 거실'
      }
    ],

    episodes: [
      {
        id: 1,
        title: '짱구 32년대출 집 폭팔',
        description: '짱구 32년대출 집 폭팔',
        thumbnail: episodeHouse01,
        youtubeUrl: 'https://youtu.be/afll6YMQ7N0?si=ZM0wMxL-9nfziGJC'
      },
      {
        id: 2,
        title: '흰둥이와 함께 놀아요',
        description: '짱구와 흰둥이의 즐거운 하루',
        thumbnail: episodeHouse01,
        youtubeUrl: 'https://www.youtube.com/watch?v=영상ID'
      }
    ]
  },

  {
    id: 'chulsoo-house',
    name: '철수네 집',
    icon: '🏡',
    summary: '깔끔하고 모범적인 철수가 살고 있는 집이에요.',
    image: chulsooHouse,

    position: {
      top: '8%',
      left: '55%'
    },

    characters: [
      {
        name: '김철수',
        image: character03
      },
      {
        name: '철수 엄마',
        image: character30
      },
      {
        name: '철수 아빠',
        image: character29
      }
    ],

    description:
      '철수의 성격처럼 깔끔하고 잘 정돈된 집이에요. 철수는 이곳에서 공부하거나 좋아하는 프로그램을 보며 시간을 보내요.',

    features: [
      {
        icon: '📚',
        text: '책과 문제집이 정리된 공부방'
      },
      {
        icon: '🗓️',
        text: '철수가 좋아하는 모애모애삐를 보는 곳'
      },
      {
        icon: '✨',
        text: '깔끔하고 정돈된 실내'
      }
    ],

    episodes: [
        {
        id: 1,
        title: '짱구는 집을 지켜요',
        description: '짱구가 혼자 집을 지키며 벌어지는 이야기',
        thumbnail: episodeHouse01,
        youtubeUrl: 'https://www.youtube.com/watch?v=영상ID'
      },
      {
        id: 1,
        title: '짱구는 집을 지켜요',
        description: '짱구가 혼자 집을 지키며 벌어지는 이야기',
        thumbnail: episodeHouse01,
        youtubeUrl: 'https://www.youtube.com/watch?v=영상ID'
      }
    ]
  },

  {
    id: 'park',
    name: '떡잎마을 공원',
    icon: '🌳',
    summary: '떡잎방범대 친구들이 함께 노는 공원이에요.',
    image: parkImage,

    position: {
    top: '42%',
    left: '15%'
    },

    characters: [
      {
        name:'신짱구',
        image: character01
        },
        {
        name:'김철수',
        image: character03
        },
        {
        name:'이훈이',
        image: character02
        },
        {
        name:'한유리',
        image: character04
        },
        {
        name:'맹구',
        image: character05
        },
    ],

    description:
    '짱구와 친구들이 모여 놀거나 떡잎방범대 활동을 하는 장소예요. 가끔 유리에 의해 역할 놀이도 하는 공간이에요',

    features: [
    {
        icon: '🛝',
        text: '친구들과 함께 노는 놀이터'
    },
    {
        icon: '🌱',
        text: '맹구가 돌멩이를 발견하는 장소'
    },
    {
        icon: '👦',
        text: '떡잎방범대의 주요 활동 장소'
    }
    ],

    episodes: [
        {
        id: 1,
        title: '짱구는 집을 지켜요',
        description: '짱구집 폭팔',
        thumbnail: episodeHouse01,
        youtubeUrl: 'https://youtu.be/afll6YMQ7N0?si=ZM0wMxL-9nfziGJC'
    },
    {
        id: 1,
        title: '짱구는 집을 지켜요',
        description: '짱구가 혼자 집을 지키며 벌어지는 이야기',
        thumbnail: episodeHouse01,
        youtubeUrl: 'https://www.youtube.com/watch?v=영상ID'
    }
    ]
},

{
    id: 'kindergarten',

    name: '떡잎유치원',

    icon: '🏫',

    summary:
        '짱구와 친구들이 매일 등원하는 유치원이에요.',

    image: kindergartenImage,

    position:{
        top:'10%',
        left:'20%'
    },

    characters:[
        {
        name:'원장선생님',
        image: character16
        },
        {
        name:'채성아 선생님',
        image: character20
        },
        {
        name:'나미리 선생님',
        image: character19
        },
        {
        name:'차은주 선생님',
        image: character21
        },
        {
        name:'치타',
        image: character06
        },
        {
        name:'수지',
        image: character13
        },
        {
        name:'흑곰',
        image: character22
        }
    ],

    description:
        '떡잎방범대 친구들이 함께 생활하는 유치원입니다. 장난도 치고 공부도 하며 매일 새로운 이야기가 펼쳐지는 장소예요.',

    features:[
        {
        icon:'🎒',
        text:'떡잎방범대의 시작'
        },
        {
        icon:'🎨',
        text:'미술시간과 체육시간'
        },
        {
        icon:'🍱',
        text:'맛있는 도시락 시간'
        }
    ],

    episodes:[]
},

{
    id:'apartment',

    name:'와르르 맨션',

    icon:'🏢',

    summary:
        '짱구네 집이 폭팔한 후에 잠시 머문 집이에요',

    image: apartmentImage,

    position:{
        top:'10%',
        left:'84%'
    },

    characters:[
        {
        name:'박말순',
        image: character28
        },
        {
        name:'오수',
        image: character12
        },
        {
        name:'배우경',
        image: character27
        },
        {
        name:'유미 엄마',
        image: character26
        },
        {
        name:'유미',
        image: character25
        },
    ],

    description:
        '짱구네 집이 폭팔한 후에 잠시 머문 집이에요, 와르르맨션에 사는 이웃 주민들과 많은 이야기가 담겨있어요.',

    features:[
        {
        icon:'🏢',
        text:'짱구네 집'
        },
        {
        icon:'👨‍👩‍👧',
        text:'오수집과의 벽으로 이어짐'
        }
    ],

    episodes:[

    ]
},

{
  id:'neighbor',

  name:'옆집 아줌마네',

  icon:'👵',

  summary:
    '짱구의 장난 때문에 자주 등장하는 이웃이에요.',

  image: neighborHouse,

  position:{
    top:'45%',
    left:'85%'
  },

  characters:[
    {
      name:'옆집 아줌마',
      image: character18
    },
    {
      name:'로베르토',
      image: character31
    },
  ],

  description:
    '짱구 엄마랑 항상 몇시간씩 수다를 떠는 아주머니에요. 가끔 짱구 짱아를 돌봐주시고 극장판에서는 짱구네 가족이 집을 나갈때 흰둥이를 맡기는 곳이에요',

  features:[
    {
      icon:'😂',
      text:'외국인 로베르토가 사는집'
    },
    {
      icon:'🏡',
      text:'항상 평화로운 집'
    },
  ],

  episodes:[
  ]
},

{
  id:'bo-house',

  name:'훈이네 집',

  icon:'🏡',

  summary:
    '훈이가 살고 있는 따뜻한 집이에요.',

  image: boHouse,

  position:{
    top:'75%',
    left:'80%'
  },

  characters:[
    {
      name:'훈이',
      image: character02
    },
    {
      name:'훈이이네 엄마',
      image: character23
    },
    {
      name:'훈이이네 아빠',
      image: character24
    },
  ],

  description:
    '훈이가 좋아하는 간식과 장난감이 있는 집입니다. 친구들과 함께 놀거나 숙제를 하는 장면이 자주 등장해요.',

  features:[
    {
      icon:'🍪',
      text:'훈이가 좋아하는 간식'
    },
    {
      icon:'🧸',
      text:'장난감이 많은 방'
    },
    {
      icon:'😊',
      text:'친구들과 자주 노는 장소'
    }
  ],

  episodes:[
  ]
}
]
