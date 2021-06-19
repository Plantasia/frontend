import { Modal, Button } from "react-bootstrap"
import { useRouter } from "next/router"

export const TermsOfUseModal = ({ visible, onHide, acceptTerms }) => {
  const router = useRouter()
  return (
    <Modal show={visible} onHide={onHide} size="lg">
      <Modal.Header>Termos de uso do fórum plantasia</Modal.Header>
      <Modal.Body>
        <section>
          <h1>Termos de Uso Plantasia</h1>
          <h6>
            A partir de 25 de março de 2021. Última revisão em 23 de março de
            2021.
          </h6>
        </section>

        <section>
          <p>
            O Plantasia capacita centenas de milhares de comunidades online
            distintas. Este Termo de Uso e sua conduta tornam isso possível.
          </p>

          <p>
            Lembre-se de que o Plantasia é para se sectionertir e se destina a
            ser um lugar para seu entretenimento e aprendizagem, mas ainda
            precisamos de algumas regras básicas. Ao acessar ou usar nossos
            Serviços, você concorda em obedecer a estes Termos. Se você não
            concordar com estes Termos, você não poderá acessar ou usar nossos
            Serviços.
          </p>
        </section>
        <section>
          <section>
            <h4>1. Seu acesso aos serviços</h4>

            <p>
              Pessoas de qualquer idade têm permissão para criar uma conta ou
              usar os serviços de qualquer forma.
            </p>
            <p>
              Se você estiver aceitando estes Termos em nome de outra pessoa
              jurídica, incluindo uma empresa ou entidade governamental, você
              declara que tem plena autoridade legal para vincular tal entidade
              a estes Termos.
            </p>
          </section>
          <section>
            <h4>2. Seu uso dos serviços</h4>

            <p>
              O Plantasia concede a você uma licença pessoal, intransferível,
              não exclusiva, revogável e limitada para usar e acessar os
              Serviços somente conforme permitido por estes Termos. Nós nos
              reservamos todos os direitos não expressamente concedidos a você
              por estes Termos.
            </p>
            <p>
              Exceto conforme permitido por meio dos Serviços ou de outra forma
              permitido por nós por escrito, sua licença não inclui o direito
              de:
            </p>
            <p>
              icenciar, vender, transferir, atribuir, distribuir, hospedar ou de
              outra forma explorar comercialmente os Serviços ou Conteúdo;
              modificar, preparar trabalhos derivados, desmontar, descompilar ou
              fazer engenharia reversa em qualquer parte dos Serviços ou
              Conteúdo; ou acessar os Serviços ou Conteúdo para construir um
              site, produto ou serviço semelhante ou competitivo do Plantasia.
            </p>
            <p>
              Nós nos reservamos o direito de modificar, suspender ou
              descontinuar os Serviços (no todo ou em parte) a qualquer momento,
              com ou sem aviso prévio. Qualquer versão futura, atualização ou
              outra adição à funcionalidade dos Serviços estará sujeita a estes
              Termos, que podem ser atualizados de tempos em tempos. Você
              concorda que não seremos responsáveis por você ou qualquer
              terceiro por qualquer modificação, suspensão ou descontinuação dos
              Serviços ou de qualquer parte deles.
            </p>
          </section>

          <section>
            <h4>3. Sua conta do Plantasia e segurança da conta</h4>

            <p>
              Para usar certos recursos de nossos serviços, pode ser necessário
              criar uma conta Plantasia e nos fornecer um nome de usuário, senha
              e algumas outras informações sobre você.
            </p>
            <p>
              Você é o único responsável pelas informações associadas à sua
              conta e por tudo o que acontece relacionado à sua conta. Você deve
              manter a segurança de sua conta e notificar imediatamente o
              Plantasia se descobrir ou suspeitar que alguém acessou sua conta
              sem sua permissão. Recomendamos que você use uma senha forte que
              seja usada apenas com sua conta e habilite a autenticação de dois
              fatores.
            </p>
          </section>
          <section>
            <h4>4. Seu conteúdo</h4>

            <p>
              Os serviços podem conter informações, texto, links, gráficos,
              fotos, vídeos ou outros materiais, incluindo conteúdo criado ou
              enviado aos serviços por você ou por meio de sua conta. Não
              assumimos qualquer responsabilidade e não endossamos, apoiamos ou
              garantimos, expressa ou implicitamente, a integridade, veracidade,
              precisão ou confiabilidade de qualquer parte do Seu Conteúdo.
            </p>
            <p>
              Ao enviar seu conteúdo aos serviços, você declara e garante que
              tem todos os direitos, poderes e autoridade necessários para
              conceder os direitos ao seu conteúdo contidos nestes Termos.
              Porque você é o único responsável por seu conteúdo, você pode se
              expor a responsabilidades se postar ou compartilhar conteúdo sem
              todos os direitos necessários.
            </p>
            <p>
              Você retém todos os direitos de propriedade que possui sobre o seu
              conteúdo, mas concede ao Plantasia a seguinte licença para usar
              esse conteúdo:
            </p>
            <p>
              Quando seu conteúdo é criado ou enviado aos serviços, você nos
              concede uma licença mundial, livre de royalties, perpétua,
              irrevogável, não exclusiva, transferível e sublicenciava para
              usar, copiar, modificar, adaptar, preparar trabalhos derivados,
              distribuir, armazene, execute e exiba seu conteúdo e qualquer
              nome, nome de usuário, voz ou imagem fornecida em conexão com seu
              conteúdo em todos os formatos de mídia e canais agora conhecidos
              ou desenvolvidos posteriormente em qualquer lugar do país. Você
              também concorda que podemos remover metadados associados ao seu
              conteúdo, e você renuncia irrevogavelmente a quaisquer
              reivindicações e afirmações de direitos morais ou atribuição com
              relação ao seu conteúdo.
            </p>
            <p>
              Quaisquer ideias, sugestões e comentários sobre o Plantasia ou
              nossos serviços que você nos fornece são inteiramente voluntários
              e você concorda que o Plantasia pode usar tais ideias, sugestões e
              comentários sem compensação ou obrigação para com você.
            </p>
            <p>
              Embora não tenhamos obrigação de filtrar, editar ou monitorar seu
              conteúdo, podemos, a nosso exclusivo critério, excluir ou remover
              seu conteúdo a qualquer momento e por qualquer motivo, inclusive
              por violar estes Termos.
            </p>
          </section>

          <section>
            <h4>5. Coisas que você não pode fazer</h4>

            <p>
              Ao usar ou acessar o Plantasia, você deve cumprir estes Termos e
              todas as leis, regras e regulamentos aplicáveis. Você não pode
              fazer o seguinte:
            </p>
            <section>
              <h5>Regra 1</h5>
              <p>
                Lembre-se somos todos humanos. Plantasia é um lugar para criar
                comunidade e pertencer, não para atacar grupos de pessoas
                marginalizados ou vulneráveis. Todos têm o direito de usar o
                Plantasia livre de assédio, intimidação e ameaças de violência.
                Comunidades e usuários que incitem a violência ou que promovam o
                ódio com base na identidade ou vulnerabilidade serão banidos.
              </p>
            </section>
            <section>
              <h5>Regra 2</h5>
              <p>
                Respeite as regras da comunidade. Publique conteúdo autêntico em
                comunidades onde você tem um interesse pessoal, e não trapaceie
                ou se envolva na manipulação de conteúdo (incluindo spam,
                manipulação de votos, evasão de proibição ou fraude de
                assinante) nem interfira ou interrompa as comunidades do
                Plantasia.
              </p>
            </section>
            <section>
              <h5>Regra 3</h5>
              <p>
                Respeite a privacidade dos outros. Instigar assédio, por
                exemplo, revelando informações pessoais ou confidenciais de
                alguém, não é permitido. Nunca poste ou ameace postar mídia
                íntima ou sexualmente explícita de alguém sem seu consentimento.
              </p>
            </section>
            <section>
              <h5>Regra 4</h5>
              <p>
                Não poste nem incentive a postagem de conteúdo sexual ou
                sugestivo. Lembre-se o Plantasia se trata de uma comunidade com
                o intuito de promover conhecimento e curiosidades a respeito de
                plantas e nada mais.
              </p>
            </section>
            <section>
              <h5>Regra 5</h5>
              <p>
                Você não precisa usar seu nome verdadeiro para usar o Plantasia,
                mas não se faça passar por um indivíduo ou entidade de maneira
                enganosa ou enganosa.
              </p>
            </section>
            <section>
              <h5>Regra 6</h5>
              <p>
                Garanta que as pessoas tenham experiências previsíveis no
                Plantasia rotulando adequadamente o conteúdo e as comunidades.
              </p>
            </section>
            <section>
              <h5>Regra 7</h5>
              <p>
                Seja legal e não poste conteúdo ilegal ou solicitar ou facilitar
                transações ilegais ou proibidas.
              </p>
            </section>
            <section>
              <h5>Regra 8</h5>
              <p>
                Não interrompa o site ou faça qualquer coisa que interfira com o
                uso normal do Plantasia.
              </p>
            </section>
            <section>
              <h5>Regra 9</h5>
              <p>
                É proibido obter acesso (ou tentar obter acesso a) a Conta de
                outro usuário ou quaisquer partes não públicas dos Serviços,
                incluindo os sistemas de computador ou redes conectadas ou
                usadas em conjunto com os Serviços.
              </p>
            </section>
            <section>
              <h5>Regra 10</h5>
              <p>
                Não faça upload, transmita ou distribua para ou através dos
                serviços qualquer vírus, worms, código malicioso ou outro
                software com a intenção de interferir nos serviços, incluindo
                seus recursos relacionados à segurança.
              </p>
            </section>
            <section>
              <h5>Regra 11</h5>
              <p>
                Respeite o direito de propriedade e não se utilize dos serviços
                para violar a lei aplicável ou infringir os direitos de
                propriedade intelectual de qualquer pessoa ou entidade ou
                quaisquer outros direitos de propriedade.
              </p>
            </section>
            <section>
              <h5>Regra 12</h5>
              <p>
                Respeite o direito de propriedade e não se utilize dos serviços
                para violar a lei aplicável ou infringir os direitos de
                propriedade intelectual de qualquer pessoa ou entidade ou
                quaisquer outros direitos de propriedade.
              </p>
            </section>
          </section>
          {/* <section>
            <h4>6. Alterações a estes Termos</h4>
          </section> */}
          <section>
            <h4>7. Rescisão</h4>

            <p>
              Você pode rescindir estes Termos a qualquer momento e por qualquer
              motivo, excluindo sua Conta e descontinuando o uso de todos os
              Serviços. Se você parar de usar os Serviços sem desativar sua
              conta, sua conta poderá ser desativada devido à inatividade
              prolongada.
            </p>
            <p>
              Podemos suspender ou encerrar sua Conta e capacidade de acessar ou
              usar os Serviços a qualquer momento por qualquer ou nenhum motivo,
              incluindo a violação destes Termos ou de nossa Política de Uso.
            </p>
          </section>
          <section>
            <h4>8. Diversos</h4>
            <p>
              Estes Termos constituem o acordo integral entre você e nós em
              relação ao seu acesso e uso dos Serviços. Nossa falha em exercer
              ou fazer cumprir qualquer direito ou disposição destes Termos não
              funcionará como uma renúncia de tal direito ou disposição. Se
              qualquer disposição destes Termos for, por qualquer motivo,
              considerada ilegal, inválida ou inexequível, o restante dos Termos
              permanecerá em vigor. Você não pode atribuir ou transferir nenhum
              dos seus direitos ou obrigações sob estes Termos sem o nosso
              consentimento. Podemos atribuir livremente qualquer um de nossos
              direitos e obrigações sob estes Termos.
            </p>
          </section>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onHide}>
          cancelar
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            acceptTerms()
          }}
        >
          concordar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
