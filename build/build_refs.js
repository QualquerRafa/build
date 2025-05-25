episodes = {
    1 : {
        "title" : "That One with the Best Match (ベストマッチな奴ら, Besuto Macchi na Yatsura)",
        "desc" : "É uma brincadeira pra parecer <a href='https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_bin%C3%A1rio'>Números Binários</a>, mas na verdade está na nossa base 10 tradicional mesmo. E nela, qualquer número elevado a 0 será igual a 1. Então: 1010<sup>0</sup> = 1",
    },

    2 : {
        "title" : "The Innocent Runaway (無実のランナウェイ, Mujitsu no Rannawei)",
        "desc" : "É uma referência à <a href='https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci'>Sequência de Fibonacci</a>. O episódio substitui n=3, pedindo portanto o Terceiro Elemento da Sequência de Fibonacci. Então: F<sub>(3)</sub> = 2.",
    },

    3 : {
        "title" : "Borderline of Justice (正義のボーダーライン, Seigi no Bōdārain)",
        "desc" : "Parece complicado, mas só está pedindo um valor para <b>n</b> tal que essa expressão seja um elemento dos Naturais (ou seja, tenha um resultado maior do que 0). Então: n=3 <a href='https://www.wolframalpha.com/input?i2d=true&i=Divide%5B%5C%2840%29Power%5B2%2Cn%5D%2B1%5C%2841%29%2CPower%5Bn%2C2%5D%5D'>resolve a condição</a>.<br>Aparentemente essa foi a <a href='https://su-hai.hatenablog.com/entry/11560740'>terceira questão da Olimpiada de Matemática Internacional em 1990</a>.",
    },

    4 : {
        "title" : "The Testimony Will Be Zero (証言はゼロになる, Shōgen Wa Zero ni naru)",
        "desc" : "Essa notação x(G) geralmente se refere ao <a href='https://pt.wikipedia.org/wiki/Teorema_das_quatro_cores'>Teorema das Quatro Cores</a>, que afirma <i>\"não mais do que quatro cores são necessárias para colorir as regiões de qualquer mapa, de modo que duas regiões adjacentes não tenham a mesma cor\"</i>.<br>Então dá pra presumir que o episódio 4 está fazendo uma referência a isso mesmo.",
    },

    5 : {
        "title" : "Dangerous Identity (危ういアイデンティティー, Ayaui Aidentitī)",
        "desc" : "<a href='https://pt.wikipedia.org/wiki/Equa%C3%A7%C3%A3o_do_quinto_grau#Insolubilidade_da_qu%C3%ADntica'>Equações de Quinto Grau não podem ser resolvidas algébricamente</a>, ou seja, pelos métodos convencionais não é possível encontrar a solução (e/ou pontos em que o gráfico toca o 0) delas. Mas existem outras técnicas."
    },

    6 : {
        "title" : "Moonsault of Anger (怒りのムーンサルト, Ikari no Mūnsaruto)",
        "desc" : "É uma leve modificação na leitura, e aplicação para encontrar o número desse episódio, da <a href='https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_zeta_de_Riemann'>Função Zeta de Riemann</a>. Veja as anotações para o <a href='#episode_12'>Episódio 12</a> para mais detalhes da função completa.",
    },

    7 : {
        "title" : "The Devil's Scientist (悪魔のサイエンティスト, Akuma no Saientisuto)",
        "desc" : "Extensão do mesmo conceito utilizado no <a href='#episode_4'>Episódio 4</a>, mas agora para Toróides (imagine um Donut tridimensional). Se a solução pra regiões em 2D usa 4 cores, <a href='https://en.wikipedia.org/wiki/Heawood_conjecture'>a solução em 3D usa 7</a>.",
    },

    8 : {
        "title" : "Memory Starts To Talk (メモリーが語りはじめる, Memorī Ga Katari Hajimeru)",
        "desc" : "Vem do <a href='https://en.wikipedia.org/wiki/Hurwitz%27s_theorem_(complex_analysis)'>Teorema de Hurwitz</a>, que admito ser complexo demais pra mim. Não entendi nada do que ele tenta argumentar.",
    },

    9 : {
        "title" : "The Trap of Project Build (プロジェクトビルドの罠, Purojekuto Birudo no Wana)",
        "desc" : "Vem da <a href='https://en.wikipedia.org/wiki/Catalan%27s_conjecture'>Conjectura de Catalan</a>. Traduzindo do Matematiquês: ele pede dois números X e Y sequenciais, que compartilhem os mesmos valores <b>m</b> e <b>n</b> em uma potencia. 9 e 8 resolvem a condição porque 2<sup>3</sup>=8 e 3<sup>2</sup>=9. Como ele quer o maior menos o menor (x-y=1), Então x=9 para o número do episódio.",
    },

    10 : {
        "title" : "Technology of Destruction (滅亡のテクノロジー, Metsubō no Tekunorojī)",
        "desc" : "É uma leve modificação de uma das Identidades de <a href='https://en.wikipedia.org/wiki/Srinivasa_Ramanujan'>Ramanujan</a>, que você pode saber mais lendo as anotações para o <a href='#episode_22'>episódio 22</a>.<br>A questão aqui é que Pi ao quadrado já é quase 10, (π<sup>2</sup>=9.869), e a parte complicada da equação é uma soma infinita que vai adicionando numeros cada vez menorzinhos à esse valor que já é quase 10. Então é óbvio que isso eventualmente (por ser uma soma infinita) tende a chegar num valor igual a 10.",
    },

    11 : {
        "title" : "Burning Dragon (燃えろドラゴン, Moero Doragon)",
        "desc" : "Os símbolos <b>⌊</b> e <b>⌋</b> indicam <a href='https://pt.wikipedia.org/wiki/Parte_inteira'>o piso de um valor</a>, ou seja, arredonda as casas decimais pra baixo. Esse numero todo quebrado elevado a três, e depois elevado a dois, dá 11.081429... que aredondado para baixo é só 11 mesmo.",
    },

    12 : {
        "title" : "Theory of Conspiracy (陰謀のセオリー, Inbō no Seorī)",
        "desc" : "Uma pequena manipulação da <a href='https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_zeta_de_Riemann'>Função Zeta de Riemman</a> pra isolar o 12 como número do episódio. Essa função é extremamente importante pra demonstrar que <a href='https://pt.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF'>1+2+3+4+... até o infinito (importante nunca parar de somar) deve dar -1/12</a>. Não só é um resultado negativo, mas ainda por cima uma fração! Parece contra-intuitivo, mas nem é preciso de matemática muito avançada pra <a href='https://www.youtube.com/watch?v=w-I6XTVZXww'>comprovar esse resultado</a>.",
    },

    13 : {
        "title" : "Who Takes Off The Veil? (ベールを脱ぐのは誰？, Bēru o Nugu no wa Dare?)",
        "desc" : "Simplesmente um fato matemático. O matemático e filósofo grego Arquimedes, no século 3, catalogou <a href='https://pt.wikipedia.org/wiki/S%C3%B3lido_de_Arquimedes'>13 sólidos geométricos</a> cujas faces são polígonos regulares.",
    },

    14 : {
        "title" : "The False Kamen Rider (偽りの仮面ライダー, Itsuwari no Kamen Raidā)",
        "desc" : "É uma afirmação matemática relacionada à <a href='https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_totiente_de_Euler'>Função Totiente de Euler</a>. Conceito extremamente específico, que depende de uns outros 5 conceitos pra fazer algum sentido. A afirmação matemática em questão só diz que Para qualquer valor de <b>x</b>, existira um valor <b>n</b> que será <a href='https://en.wikipedia.org/wiki/Nontotient'>Não-Totiente</a>, isto é, não terá exatamente <b>n</b> <a href='https://en.wikipedia.org/wiki/Coprime_integers'>co-primos</a> menores que ele.<br>No casos do número desse episódio, 14 é o primeiro valor que satisfaz essa condição.",
    },

    15 : {
        "title" : "Judging Sento Kiryu! (桐生戦兎をジャッジしろ！, Kiryu Sento wo Jajji Shiro!)",
        "desc" : "É mais uma das ideias malucas que o <a href='https://en.wikipedia.org/wiki/Ramanujan%E2%80%93Nagell_equation'>Ramanujan</a> tirava do éter mágico. Simplesmente uma brincadeirinha de matemática recreativa: encontrar um valor pra <b>n</b> que faça de <b>2<sup>n</sup>-7</b> um quadrado perfeito. O número do episódio, 15, é uma das <a href='https://en.wikipedia.org/wiki/Ramanujan%E2%80%93Nagell_equation#Equation_and_solution'>5 soluções possíveis</a>, uma vez que 2<sup>15</sup>-7=181<sup>2</sup>",
    },

    16 : {
        "title" : "The Weaponry Hero (兵器のヒーロー, Heiki no Hīro)",
        "desc" : "Simplesmente um problema de <a href='https://pt.wikipedia.org/wiki/Tetra%C3%A7%C3%A3o'>Tetração</a>, que o próprio título do episódio já está explicando o que é. É um parente mais poderoso da <a href='https://pt.wikipedia.org/wiki/Exponencia%C3%A7%C3%A3o'>Exponenciação</a>, em que você fará 2 elevado a 2, elevado a 2 novamente.",
    },

    17 : {
        "title" : "Rider Wars Start (ライダーウォーズ開戦, Raidā Wōzu Kaisen)",
        "desc" : "Exatamente o mesmo problema do <a href='#episode_16'>episódio anterior</a>, +1 no final. Por coincidência, esse é também o segundo valor encontrado nos <a href='https://pt.wikipedia.org/wiki/N%C3%BAmero_de_Fermat'>Números de Fermat</a>, uma conjectura já descomprovada que geraria números primos a partir de Tetrações. Por isso a notação de F<sub>(2)</sub>=2<sup>2<sup>2</sup></sup>+1=17",
    },

    18 : {
        "title" : "The Golden Soldier (黄金のソルジャー, Ōgon no Sorujā)",
        "desc" : "Mais uma afirmação matemática simples, porém baseada em uma teoria que requer aprofundamento em vários outros conceitos. Em <a href='https://en.wikipedia.org/wiki/Group_theory'>Teoria de Grupos</a>, existem <a href='https://en.wikipedia.org/wiki/Classification_of_finite_simple_groups'>18 grupos finitos</a>, isto é, que seguem um mesmo conjunto de regras dentro dessa teoria. Ver também as anotações para o <a href='#episode_26'>Episódio 26</a>.",
    },

    19 : {
        "title" : "The Forbidden Item (禁断のアイテム, Kindan no Aitemu)",
        "desc" : "Simplesmente uma equaçãozinha chata de resolver na mão, mas que <a href='https://www.wolframalpha.com/input?i2d=true&i=7*cube+root%5C%2840%2920%5C%2841%29+-+Power%5B%5C%2840%29cuberoot%5C%2840%29Divide%5B5%2C3%5D%5C%2841%29+-+cuberoot%5C%2840%29Divide%5B2%2C3%5D%5C%2841%29%5C%2841%29%2C6%5D'> a calculadora resolve</a>. Incrivelmente dá 19 mesmo.",
    },


    20 : {
        "title" : "The Devil's Trigger (悪魔のトリガー, Akuma no Torigā)",
        "desc" : "Uma brincadeira relacionando as duas constantes matemáticas mais famosas que existem, o <a href='https://pt.wikipedia.org/wiki/E_(constante_matem%C3%A1tica)'>Número de Euler</a> e <a href='https://pt.wikipedia.org/wiki/Pi'>Pi</a>. Isso dá incrivelmente perto de 20, deu 19.999....<a href='https://www.wolframalpha.com/input?i=e%5Epi+-+pi'>com 8 casas decimais</a>",
    },

    21 : {
        "title" : "The Unstoppable Hazard (ハザードは止まらない, Hazādo wa Tomaranai)",
        "desc" : "Mais uma afirmação matemática, cujo segredo está na palavra final ali <a href='https://en.wikipedia.org/wiki/Harshad_number'>Harshad</a>. Os Números de Harshad são aqueles que são divisíveis pela soma de seus dígitos. 21 é divisível por 2+1.",
    },

    22 : {
        "title" : "Victory of Tears (涙のビクトリー, Namida no Bikutorī)",
        "desc" : "Um dos títulos mais simples da série, mas que carrega uma das descobertas matemáticas mais importantes da história!<br>Parece uma divisão simples, mas é o resultado final da <a href='https://en.wikipedia.org/wiki/Ramanujan%E2%80%93Sato_series'>série mais importante feita por Ramanujan pra encontrar o valor de Pi</a>, isso numa época em que ele não tinha estudo formal em matemática, e conseguiu encontrar mais casas decimais do que as calculadoras da época. É uma equação longuíssima de ser resolvida na mão, envolvendo uma soma infinita, mas que você pode parar a qualquer momento e obter uma aproximação MUITO BOA de pi.",
    },

    23 : {
        "title" : "The Phantom of the West (西のファントム, Nishi no Fantomu)",
        "desc" : "Mais uma das brincadeiras do <a href='https://en.wikipedia.org/wiki/Srinivasa_Ramanujan'>Ramanujan</a>, envolvendo uma soma alternada de raízes contidas uma dentro da outra. Até onde eu sei, essa não tem nenhum uso prático ou associação com algum conceito maior, é só <a href='https://books.google.com.tw/books?id=TT1T8A94xNcC&pg=PA218&lpg=PA218&dq=ramanujan+question+507&source=bl&ots=ulsCvgdkoA&sig=TE7Wk3uLJe8XPoLUY8J9Tcmxark&hl=zh-TW&sa=X&ved=0ahUKEwim6Pmv6PTZAhXEerwKHbNuAJoQ6AEIJTAA#v=onepage&q=ramanujan%20question%20507&f=false'>Showoff dele mesmo</a>. Se você colocar x=23 dentro dessa sequência, a igualdade se torna verdadeira.",
    },

    24 : {
        "title" : "A Man Called Rogue (ローグと呼ばれた男, Rōgu to Yobareta Otoko)",
        "desc" : "Um dos problemas mais interessantes de toda a matemática, que me fascinou quando estudei ele na faculdade. <a href='https://en.wikipedia.org/wiki/Cannonball_problem'>O problema das Bolas de Canhão</a> envolve empilhar bolas de canhão, a fim de formar uma pirâmide de base quadrada com apenas uma bola no topo. Começar com uma base de 24 bolas, tal qual o número desse episódio, é uma das soluções possíveis em 3 Dimensões.<br>A magica acontece quando a gente começa a se perguntar pra 5, 6, 7, indo até as 26 dimensões teóricas da <a href='https://en.wikipedia.org/wiki/Bosonic_string_theory'>Teoria das Cordas</a>. Parece estranho pensar nisso, mas pra certas dimensões é IMPOSSÍVEL empilhar bolas dessa forma, o que pra física de partículas explica o porque de certas interações sub-atômicas poderem ocorrer e outras não.",
    },

    25 : {
        "title" : "The Idol Awakens (アイドル覚醒, Aidoru Kakusei)",
        "desc" : "Mais <a href='https://en.wikipedia.org/wiki/Brocard%27s_problem'>um problema clássico</a> de Matemática Recreativa: encontrar um valor pra <b>n</b>, cujo seu antecessor fatorial + 1, seja igual a uma potência de <b>n</b>. Com n=5, temos que 4!+1 realmente é igual a 5<sup>2</sup>, que é 25, o número desse episódio.",
    },

    26 : {
        "title" : "The Treacherous Deathmatch (裏切りのデスマッチ, Uragiri no Desumatchi)",
        "desc" : "Seguindo a mesma <a href='https://en.wikipedia.org/wiki/Group_theory'>Teoria de Grupos</a> vista pro <a href='#episode_18'>Episódio 18</a>, existem 26 outros <a href='https://en.wikipedia.org/wiki/Sporadic_group'>Grupos Esporádicos</a> dentro da mesma teoria, isto é, 26 grupos que são exceções aos 18 principais da teoria. Mas aí fica a pergunta: se existem mais exceções do que regras, não deveriam inverter os nomes?",
    },

    27 : {
        "title" : "The Counterattack Hero (逆襲のヒーロー, Gyakushū no Hīrō)",
        "desc" : "Dentro da área da <a href='https://en.wikipedia.org/wiki/Differential_topology'>Topologia</a> na matemática (o estudo de superfícies e suas transformações), existem as <a href='https://en.wikipedia.org/wiki/Exotic_sphere'>Esféras Exóticas</a>, um grupo de objetos que seguem uma série de características. Os primeiros estudos nessa área foram feitos com esferas em 7 dimensões, que <a href='https://en.wikipedia.org/wiki/Exotic_sphere#Order_of_%CE%98n'>geram 28 objetos diferenciaveis entre si</a>. Aqui <b>EU ACHO</b>, e é apenas suposição minha, nunca estudei nada nessa área, que pela notação vir na forma de <b>bP<sub>n+1</sub></b>, a produção de Build viu o resultado de 28, mas consideraram só o n=27. ",
    },

    28 : {
        "title" : "The Genius Arrives With a Tank (天才がタンクでやってくる, Tensai ga Tanku de Yattekuru)",
        "desc" : "Mais matemática recreativa: pode parecer uma soma aleatória, mas os mais atentos perceberão que 1, 2, 4, 7 e 14 são os divisores de 28. Então o título desse episódio é uma referência a <a href='https://pt.wikipedia.org/wiki/N%C3%BAmero_perfeito'>28 ser um número perfeito</a>, isto é, a soma de seus próprios divisores.",
    },

    29 : {
        "title" : "The Opening Bell Rings (開幕のベルが鳴る, Kaimaku no Beruganaru)",
        "desc" : "Parece ser alguma <a href='https://pt.wikipedia.org/wiki/Recursividade_(ci%C3%AAncia_da_computa%C3%A7%C3%A3o)'>Função Recursiva</a> aplicada sobre ela mesma 3 vezes. Como o título não dá nenhum outro contexto, só posso confiar que o resultado é 29.",
    },

    30 : {
        "title" : "The Truth of the Pandora Box (パンドラボックスの真実, Pandora Bokkusu no Shinjitsu)",
        "desc" : "Mais uma dessas afirmações sem contexto só jogadas com algumas palavras chaves. O conceito de <a href='https://en.wikipedia.org/wiki/Totative'>Números Totativos</a> se refere a um número que, quando comparado a outro menor ou igual a <b>n</b>, os dois compartilhem um fator primo. Como o título do episódio pede o MAX totativo de <b>n=30</b>, obviamente que 30 é o maior valor possível que compartilha primos com 30.",
    },

    31 : {
        "title" : "Surging Magma! (ほとばしれマグマ！, Hotobashire Maguma!)",
        "desc" : "Sim, 2<sup>5</sup>-1 é igual a 31. A notação M<sub>5</sub> pode se referir aos <a href='https://pt.wikipedia.org/wiki/Primo_de_Mersenne'>Números Primos de Mersenne</a>, que são expressados de forma M<sub>n</sub>=2<sup>n</sup>-1",
    },

    32 : {
        "title" : "Programmed Tragedy (プログラムされた悲劇, Puroguramusareta Higeki)",
        "desc" : "Em Cristalografia, existem <a href='https://en.wikipedia.org/wiki/Crystallographic_point_group'>32 grupos de pontos cristalográficos</a> em três dimensões, isto é, 32 organizações tri-dimensionais pra cristais que seguem um conjunto de regras sobre simetria.",
    },

    33 : {
        "title" : "The Final Weapon: Evol (最終兵器エボル, Saishū Heiki Eboru)",
        "desc" : "Mais uma aplicação da <a href='https://en.wikipedia.org/wiki/Ramanujan%E2%80%93Sato_series'>Famosa série de Ramanujan para o Pi</a>, dessa vez com a expressão completíssima sendo apresentada, mas parada num ponto em que o resultado ainda é apenas igual a 33, por pura conveniência. Dá muito mais trabalho a gente tentar resolver essa conta pra saber se ela está certa, do que o que eles provavelmente fizeram, que foi igualar a 33, e ajustar o resto de trás pra frente.",
    },

    34 : {
        "title" : "The Severing Best Match (離れ離れのベストマッチ, Hanarebanare no Besuto Matchi)",
        "desc" : "Referência ao <a href='https://pt.wikipedia.org/wiki/N%C3%BAmero_de_Skewes'>Número de Skewes</a>, um número teórico GIGANTESCO proposto como provocação pra mostrar que muitas teorias matemáticas param de funcionar quando realmente se aproximam do infinito. Skewes estava errado, mas sua ideia foi útil pra várias outras coisas. O número em questão seria 10<sup>10<sup>10<sup>34</sup></sup></sup>, que reescrito pra deixar só o 34 em evidência, fica nesse formato de Logaritmos em sequência.",
    },

    35 : {
        "title" : "Tower of Destruction (破滅のタワー, Hametsu no Tawā)",
        "desc" : "<a href='https://en.wikipedia.org/wiki/Knot_theory'>Teoria de Nós</a> é uma área muito divertida da matemática! Ela trabalha exatamente o que você está pensando: a matemática por trás dos milhares tipos de nós possíveis, o porquê de seus fones embolarem no bolso, nós cegos e etc. Matematicamente falando, muitos dos nós que nós enxergamos podem parecer diferentes, mas a descrição matemática deles pode ser idêntica mesmo assim. O que o título do episódio afirma é que o número de <a href='https://en.wikipedia.org/wiki/List_of_prime_knots'>Nós não Triviais</a> de ordem menor ou igual a 8 (que tem 8 ou menos pontos de cruzamento), são 35 tipos no total.",
    },

    36 : {
        "title" : "Evolto Hunts the Stars (エボルトは星を狩る, Eboruto wa Hoshi O Karu)",
        "desc" : "Mais matemática recreativa: uma soma de números sequênciais, ao quadrado, que é igual aos mesmos números sequenciais, individualmente ao cubo.",
    },

    37 : {
        "title" : "The Ultimate Phase (究極のフェーズ, Kyūkyoku no Fēzu)",
        "desc" : "Mais uma dessas expressões chatíssimas, mas essa é bem mais simples que as anteriores. Só está indicando que o Menor <a href='https://en.wikipedia.org/wiki/Regular_prime'>Numero Primo não-Regular</a> é o 37. Imagine a lista completa dos números primos, os regulares são aqueles que caem numa categoria completamente arbitrária criada por <a href='https://en.wikipedia.org/wiki/Ernst_Kummer'>um matemático aleatório aí</a>. Os que não estão na lista dele, são os irregulares.",
    },

    38 : {
        "title" : "Mad World (マッドな世界, Maddo na Sekai)",
        "desc" : "Mais matemática recreativa: os <a href='https://en.wikipedia.org/wiki/Magic_hexagon'>Hexágonos Mágicos</a> são uma brincadeira de pegar hexágonos numerados, e ir criando camadas como se fosse uma colméia (pense num Sudoku infernal com 6 direções pra se preocupar). A ideia é que a soma dos valores de cada lado dessa colméia tenha que ser igual para todos os lados. Isso é válido pra colméia de apenas 1 camada, com apenas 1 lado, somando 1. E é valido pra colméia de 3 camadas, com 6 lados, todos somando 38.",
    },

    39 : {
        "title" : "The Unstoppable Genius (ジーニアスは止まらない, Jīniasu wa Tomaranai)",
        "desc" : "Mais uma versão das <a href='https://en.wikipedia.org/wiki/List_of_formulae_involving_%CF%80#Infinite_products'>Identidades para Pi do Ramanujan</a>, partindo de um outro princípio construtivo e interrompida onde é conveniente pra dar o número do episódio. Basicamente o mesmo caso do <a href='#episode_10'>Episódio 10</a>, em que 4π<sup>2</sup> já é 39 e uns quebrados, dos quais se subtrairá os quebrados vindos dessa soma infinita que dá numerinhos cada vez menores, porém até o infinito.",
    },

    40 : {
        "title" : "The Final Revolution (終末のレボリューション, Shūmatsu no Reboryūshon)",
        "desc" : "Baseado na <a href='https://en.wikipedia.org/wiki/Pell%27s_equation'>Equação de Pell</a>, que generaliza problemas do formato x<sup>2</sup>-ny<sup>2</sup>=1. Existem infinitas soluções desde que n não seja um quadrado perfeito. A produção simplesmente escolheu n=77 para que o valor mínimo dessa função, ou seja, onde ela toca no gráfico, fosse igual a 40.",
    },

    41 : {
        "title" : "The Truth of the Best Match (ベストマッチの真実, Besuto Matchi no Shinjitsu)",
        "desc" : "A <a href='https://www.geeksforgeeks.org/eulers-prime-formula/'>Fórmula de Euler para encontrar Números Primos</a>, que tem como número em destaque o 41, sendo possível isolar ele pra chegar no título do episódio. Como ela possui um teto dos valores que pode encontrar, a produção adicionou aquela condição no começo, em que Para qualquer valor de <b>n</b> menor ou igual a <b>q-2</b>, a expressão seria valida.",
    },

    42 : {
        "title" : "Legacy of Doubt (疑惑のレガシー, Giwaku no Regashī)",
        "desc" : "Sem nenhum contexto, do jeito que o título apresenta, isso pode ser O QUE VOCÊ QUISER.<br>Me sugeriram que seria de quantas formas seria possível <a href='https://en.wikipedia.org/wiki/Integer_partition'>Particionar o número</a> 10. Ou seja: 1. 10, 2. 9+1, 3. 8+2, 4. 8+1+1 ... até 42. 1+1+1+1+1+1+1+1+1+1",
    },

    43 : {
        "title" : "The Other Build (もう一人のビルド, Mōhitori no Birudo)",
        "desc" : "Só uma expressão pra resolver e que <a href='https://www.wolframalpha.com/input?i2d=true&i=Power%5BDivide%5B1%2Cpi%5Dln884736744%2C2%5D'>realmente dá incrivelmente próximo de 43</a>, com 11 casas decimais iguais a 0 depois da vírgula. Não faço ideia se isso é parte de alguma teoria relevante.",
    },

    44 : {
        "title" : "The End of Evolto (エボルトの最期, Eboruto no Saigo)",
        "desc" : "Só uma expressão pedindo o <a href='https://en.wikipedia.org/wiki/Derangement'>subfatorial</a> de 5, e assim como no <a href='#episode_16'>Episódio 16</a>, o próprio título já está dizendo como fazer essa conta, uma parente do Fatorial. Adivinhe o <a href='https://www.wolframalpha.com/input?i2d=true&i=5%21+Sum%5BDivide%5BPower%5B%5C%2840%29-1%5C%2841%29%2Ck%5D%2Ck%21%5D%2C%7Bk%2C0%2C5%7D%5D'>resultado</a> :)",
    },

    45 : {
        "title" : "The Scientist of Hope (希望のサイエンティスト, Kibō no Saientisuto)",
        "desc" : "Assumindo esse <b>γ</b> como <a href='https://pt.wikipedia.org/wiki/Constante_de_Euler-Mascheroni'>constante de Euler-Mascheroni</a>, 3<sup>2/0.5772156649...</sup> realmente <a href='https://www.wolframalpha.com/input?i2d=true&i=Power%5B3%2CDivide%5B2%2C%CE%B3%5D%5D'>se aproxima bastante</a> de 45.",
    },

    46 : {
        "title" : "An Oath to Be The One (誓いのビー・ザ・ワン, Chikai no Bī Za Wan)",
        "desc" : "Não faço ideia ao que isso faz referência, mas <a href='https://www.wolframalpha.com/input?i2d=true&i=cuberoot%5C%2840%29Power%5B3%2C3%5D%2BPower%5B36%2C3%5D%2BPower%5B37%2C3%5D%5C%2841%29'>a conta bate</a>. Talvez seja só uma brincadeira com o conteúdo do episódio em si, já que traz raízes cúbicas de cubos no episódio em que <a href='https://kamenrider.fandom.com/wiki/Pandora_Box'>a Caixa de Pandora</a> é remontada.",
    },

     47 : {
        "title" : "Zero Degree Flames (ゼロ度の炎, Zero-do no Honō)",
        "desc" : "Simplesmente uma continha que eles montaram pra chegar no número do episódio, usando conceitos pra parecer um pouco mais dificil. Chatinho de fazer na mão, mas <a href='https://www.wolframalpha.com/input?i2d=true&i=arctan%5C%2840%29Divide%5B1%2C73%5D%5C%2841%29%2Barctan%5C%2840%29Divide%5B1%2C132%5D%5C%2841%29%3Darctan%5C%2840%29Divide%5B1%2Cx%5D%5C%2841%29'>a calculadora resolve.</a>",
    },

     48 : {
        "title" : "To A World of Love & Peace (ラブ＆ピースの世界へ, Rabu & Pīsu no Sekai e)",
        "desc" : "O último desses Argumentos extremamente pedantes relacionados a <a href='https://en.wikipedia.org/wiki/Bertrand%27s_postulate'>teorias super específicas</a>, mas que não estão ensinando nada a ninguem. A única dificuldade aqui é estar acostumado a ler linguagem matemática, mas o que ele pede é bem simples:<br>(∀)Para qualquer <b>n</b> menor ou igual a <b>N</b>, (∃) existe um (p) número primo (∈) que faz parte do intervalo (n, 9n/8).<br>Ou seja, se você escolher n=48, o número do episódio, você satisfará essas condições. Porque entre 48 e 9*48/8=54, existe o número primo 53.",
    },

     49 : {
        "title" : "The Tomorrow Build Will Create (ビルドが創る明日, Birudo ga Tsukuru Ashita)",
        "desc" : "No título desse episódio não tem praticamente nenhuma matemática envolvida, eles só vão reduzindo os dígitos da esquerda e atualizando o resultado na direita até chegar no número do episódio.<br>667<sup>2</sup>=444889<br>67<sup>2</sup>=4489<br>7<sup>2</sup>=49<br>É no máximo curioso que pra cada 6 retirado da esquerda, somem os dois digitos exatamente no meio do resultado anterior.",
    },


}