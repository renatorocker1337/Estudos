<h1>Estudos para certificação Azure AZ900</h1>

<h1> Principais Serviços de Nuvem - arquitetura e garantias de serviços do Azure </h1>

O Azure fornece uma rede global de datacenters seguros em que você pode implantar seus serviços.

Neste módulo será visto:

 - Explorar a estrutura física da infraestrutura do Azure

 - Entender os contratos de nível de serviço fornecidos pelo Azure

 - Saiba como fornecer seus próprios contratos de nível de serviços para aplicativos.

 <h1> Noções básicas sobre datacenters e regiões no Azure </h1>

 O Microsoft Azure é composto por datacenters espalhados pelo mundo. Quando utiliza um serviço ou cria recurso como uma máquina virtual ou um banco de dados SQL, você está usando equipamentos em um ou mais desses locais.

 Os datacenters específicos não são expostos para os usuários finais diretamente. Em vez disso, o Azure os organiza em regiões.

 <h1> O que é uma região?</h1>

 Uma região é uma área geográfica do planeta que contém um ou mais datacenters(possivelmente vários) próximos e conectados a uma rede de baixa latência. O Azure atríbui e controla os recursos de modo inteligente dentro de cada região para garantir que as cargas de trabalho sejam balanceadas corretamente.

 Quando implanta um recurso no Azure, geralmente você precisa escolher a região em que deseja que seu recurso seja implantado.

**Importante**

Alguns serviços ou recursos de máquina virtual estão disponíveis somente em determinadas regiões, como tamanhos de máquinas virtuais ou tipos de armazenamento. Também há alguns serviços globais do Azure que não exigem que você selecione uma região específica, como o Microsoft Azure Active Directory, o Gerenciador de Tráfego do Microsoft Azure ou DNS do Azure.

Alguns exemplos de regiões são Oeste dos EUA, Canadá Central, Europa Ocidental, Leste da Austrália e Oeste do Japão. Aqui está uma exibição de todas as regiões disponíveis a partir de fevereiro de 2020:

![grafo](https://github.com/renatorocker1337/Estudos/blob/main/Azure/Imagens%20das%20documenta%C3%A7%C3%B5es/Principais%20servi%C3%A7os%20de%20nuvem/Mapa%20global%20de%20regi%C3%B5es%20do%20Azure%20dispon%C3%ADveis%20a%20partir%20de%20junho%20de%202020.png)


<h1> Por que isso é importante?</h1>

O Azure tem mais regiões globais do que qualquer outro provedor de nuvem. Isso proporciona a flexibilidade para aproximar os aplicativos dos seus usários, independentemente de onde estão. Ele também fornece melhor escalabilidade, redundância e preserva a residência de dados para seus serviços.

<h1> Regiões especiais do Azure </h1>

O Azure tem regiões especializadas que talvez você queria usar durante a criação de seus aplicativos para fins de conformidade ou jurídicos. Elas incluem:


- US DoD Central, US Gov - Virgínia, US Gov Iowa e muito mais: Essas são instâncias lógicas e físicas do Azure isoladas da rede, destinada a parceiros e órgãos do governo dos EUA. Esses datacenters são operados por cidadãos selecionados dos EUA e incluem certificações de conformidade adicionais.

- Leste da china, Norte da china e muito mais: Essas regiões estão disponíveis por meio de uma parceria exclusiva entre a Microsoft e a 21Vianet, segundo a qual a Microsoft não mantém diretamente os data centers.

- As regiões são o que você usa para identificar a localização de seus recursos, mas há dois outros termos aos quais você também deve estar atento: geografias e zonas de disponibilidade.


<h1> Noções básicas sobre geografias no Azure</h1>

O Azure divide o mundo em geografias definidas por limites geopolíticos ou fronteiras de países. Uma geografia do Azure é um mercado discreto, geralmente contendo duas ou mais regiões que preservam limites de conformidade e de residência de dados. Essa divisão traz vários benefícios.

- As geografias permitem que clientes com necessdiades de conformidade e de residência de dados específicas mantenham seus dados e aplicativos próximos.

- As geografias garantem que os requisitos de residência, de soberania, de conformidade e de resiliência de dados sejam respeitados dentro de limites geográficos.

- Graças à conexão a uma infraestrutura de rede dedicada de alta capacidade, as geografias conseguem resistir a falhas completas de região.

**Dica**

Residência de dados se refere ao local físico ou geográfico dos dados ou das informações de uma organização. Ela define os requisitos legais ou regulamentaraes impostos aos dados com base no país ou na região em que eles residem e é uma consideração importante ao planejar o armazenamento de dados do aplicativo.

<h2> Geografias são dividas nas seguintes áreas:</h2>

- [x] Américas
- [x] Europa
- [x] Pacífico Asiático
- [x] Oriente Médio e África

Cada região pertence a uma única geografia e tem regras específicas de disponibilidade de serviço, conformidade e residência/soberania de dados aplicadas a ela.

# Noções básicas sobre Zonas de Disponobilidade no Azure

É importante verificar se seus serviços e dados são redundantes para que você possa proteger suas informações em caso de falha. Quando você hospeda sua infraestrutura, é necessário duplicar ambientes de hardware. O Azure pode ajudar a tornar seu aplicativo disponível por meio das **Zonas de Disponibilidade.**

# O que é uma Zona de Disponibilidade?

Zonas de disponibilidade são datacenters separados fisicamente dentro de uma região do Azure.

Cada Zona de Disponibilidade é comporta por um ou mais datacneters equipados com energia, resfriamento e rede independentes. Ela é configurada para ser um _limite de isolamento_. Se uma zona ficar inativa, as outras continuarão funcionando. Zonas de Disponibilidade são conectadas por meio de redes óptica privadas de alta velocidade.

![grafo](https://github.com/renatorocker1337/Estudos/blob/main/Azure/Imagens%20das%20documenta%C3%A7%C3%B5es/Principais%20servi%C3%A7os%20de%20nuvem/zona%20de%20disponibilidade.png)


# Regiões compatíveis

Nem todas as regiões têm suporte para Zonas de Disponibilidade. As regiões a seguir têm um mínimo de três zonas separadas para garantir a resiliência.

- Centro dos EUA
- Leste dos EUA 2
- Oeste dos EUA 2
- Europa Ocidental
- França Central
- Norte da Europa
- Sudeste Asiático

## Dica

A lista de regiões com suporte está sendo expandida - verifique a documentação para obter as informações mais recentes.

# Uso de Zonas de Disponibilidade em seus aplicativos

Você pode usar as Zonas de Disponibilidade para executar aplicativos de missão crítica e incorporar alta disponibilidade à arquitetura do aplicativo colocalizando seus recursos de computação, armazenamento, rede e dados dentro de uma zona e replicando em outras zonas. Tenha em mente que pode haver um custo para duplicar seus serviços e transferir dados entre zonas.

As Zonas de Disponibilidade são, principalmente, para VMs, discos gerenciados, balanceadores de carga e bancos de dados SQL. Os serviços do Azure que dão suporte a zonas de Disponibilidade enquadram-se em duas categorias:

- Serviços zonais - você fixa o recurso em uma zona específica(por exemplo, máquinas virtuais, discos gerenciados, endereços IP)

- Serviços com redundância de zona - a plataforma replica automaticamente entre zonas (por exemplo, armazenamento com redundância de zona, Banco de Dados SQL).

Verifique a documentação para determinar quais elementos de sua arquitetura você pode associar a uma Zona de Disponibilidade.

# Noções básicas sobre pares de regiões no Azure

As zonas de disponibilidade são criadas usando um ou mais datacenters e há no mínimo três zonas dentro de uma única região. No entendo, é possível que um desastre grande o suficiente cause uma interrupção grande o suficiente para afetar até mesmo dois datacenters. Por isso, o Azure também cria pares de regiões.

## O que é um par de regiões?

Cada região do Azure é conectada com outra região na mesma geografia (como EUA, Europa ou Ásia) a pelo menos 300 milhas (cerca de 480 km) de distância. Essa abordagem permite a replicação de recursos, como o armazenamento de máquina virtual, em uma geografia, o que ajuda a reduzir a probabilidade de interupções devido a eventos como desastres naturais, conflitos civis, quedas de energia ou interrupções de rede física afetarem as duas regiões ao mesmo tempo. Se uma região em um par de regiões fosse afetada por um desastre natural, por exemplo, os serviços fariam failover automaticamente para outra região nesse par.

Exemplos de pares de regiões no Azure são Oeste dos EUA emparelhado com Leste dos EUA e Sudeste da Ásia emparelhado com o Leste da Ásia.

![grafo](https://github.com/renatorocker1337/Estudos/blob/main/Azure/Imagens%20das%20documenta%C3%A7%C3%B5es/Principais%20servi%C3%A7os%20de%20nuvem/par%20de%20regi%C3%B5es.png)

Uma vez que o par de regiões está diretamente conectado e suficientemente afastado para ser isolado contra desastres regionais, você pode usá-lo para fornecer redundância de dados e serviços confáveis. Alguns serviços oferecem armazenamento com redundância geográfica automática usando pares de regiões.

Outras vantagens dos pares de regiões incluem:

- Se houver uma interrupção ampla do Azure, uma região de cada par será priorizada para que pelo menos uma seja restaurada o quanto antes para os aplicativos hospedados nesse par de regiões.
- As atualizações planejadas do Azure são distribuídas para regiões emparelhadas uma por vez, de modo a minimizar o tempo de inatividade e o risco de interrupção dos aplicativos

- Os dados continuam residindo na mesma geografia que seu par (com exceção do Sul do Brasil) para fins de jurisdição do imposto e aplicação da lei.

Ter um conjunto de datacenters distribuído em larga escala permite que o Azure forneça uma garantia de alta disponibilidade.
