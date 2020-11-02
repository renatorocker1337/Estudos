<h1>Estudos para certificação Azure AZ900</h1>

<h1> Principais Serviços de Nuvem - arquitetura e garantias de serviços do Azure </h1>

O Azure fornece uma rede global de datacenters seguros em que você pode implantar seus serviços.

Neste módulo será visto:

 [x]Explorar a estrutura física da infraestrutura do Azure

 [x]Entender os contratos de nível de serviço fornecidos pelo Azure

 [x]Saiba como fornecer seus próprios contratos de nível de serviços para aplicativos.

 <h1> Noções básicas sobre datacenters e regiões no Azure </h1>

 O Microsoft Azure é composto por datacenters espalhados pelo mundo. Quando utiliza um serviço ou cria recurso como uma máquina virtual ou um banco de dados SQL, você está usando equipamentos em um ou mais desses locais.

 Os datacenters específicos não são expostos para os usuários finais diretamente. Em vez disso, o Azure os organiza em regiões.

 <h1> O que é uma região?</h1>

 Uma região é uma área geográfica do planeta que contém um ou mais datacenters(possivelmente vários) próximos e conectados a uma rede de baixa latência. O Azure atríbui e controla os recursos de modo inteligente dentro de cada região para garantir que as cargas de trabalho sejam balanceadas corretamente.

 Quando implanta um recurso no Azure, geralmente você precisa escolher a região em que deseja que seu recurso seja implantado.

**Importante**

Alguns serviços ou recursos de máquina virtual estão disponíveis somente em determinadas regiões, como tamanhos de máquinas virtuais ou tipos de armazenamento. Também há alguns serviços globais do Azure que não exigem que você selecione uma região específica, como o Microsoft Azure Active Directory, o Gerenciador de Tráfego do Microsoft Azure ou DNS do Azure.

Alguns exemplos de regiões são Oeste dos EYA, Canadá Central, Europa Ocidental, Leste da Austrália e Oeste do Japão. Aqui está uma exibição de todas as regiões disponíveis a partir de fevereiro de 2020:

![grafo](https://github.com/renatorocker1337/Estudos/blob/main/Mapa%20global%20de%20regi%C3%B5es%20do%20Azure%20dispon%C3%ADveis%20a%20partir%20de%20junho%20de%202020.png)


<h1> Por que isso é importante?</h1>

O Azure tem mais regiões globais do que qualquer outro provedor de nuvem. Isso proporciona a flexibilidade para aproximar os aplicativos dos seus usários, independentemente de onde estão. Ele também fornece melhor escalabilidade, redundância e preserva a residência de dados para seus serviços.

<h1> Regiões especiais do Azure </h1>

O Azure tem regiões especializadas que talvez você queria usar durante a criação de seus aplicativos para fins de conformidade ou jurídicos. Elas incluem:


[x]US DoD Central, US Gov - Virgínia, US Gov Iowa e muito mais: Essas são instâncias lógicas e físicas do Azure isoladas da rede, destinada a parceiros e órgãos do governo dos EUA. Esses datacenters são operados por cidadãos selecionados dos EUA e incluem certificações de conformidade adicionais.

[x]Leste da china, Norte da china e muito mais: Essas regiões estão disponíveis por meio de uma parceria exclusiva entre a Microsoft e a 21Vianet, segundo a qual a Microsoft não mantém diretamente os data centers.

As regiões são o que você usa para identificar a localização de seus recursos, mas há dois outros termos aos quais você também deve estar atento: geografias e zonas de disponibilidade.


<h1> Noções básicas sobre geografias no Azure</h1>

O Azure divide o mundo em geografias definidas por limites geopolíticos ou fronteiras de países. Uma geografia do Azure é um mercado discreto, geralmente contendo duas ou mais regiões que preservam limites de conformidade e de residência de dados. Essa divisão traz vários benefícios.

