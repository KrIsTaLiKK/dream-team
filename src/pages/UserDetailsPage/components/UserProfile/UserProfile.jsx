import s from "./UserProfile.module.css";
import Container from "../../../../shared/components/Container/Container";
import Icon from "../../../../shared/components/Icon/Icon";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  const { email, first_name, last_name, avatar } = user;

  const mailHref = `mailto:${email}`;

  return (
    <div>
      <div className={s.allWrap}>
        <div className={s.secondWrap}>
          <div className={s.wrapHead}>
            <div className={s.wrapInfo}>
              <div className={s.headTextWrap}>
                <h1 className={s.title}>
                  {first_name} {last_name}
                </h1>
                <p className={s.role}>Партнер</p>
              </div>
              <div className={s.imgWrap}>
                <img src={avatar} alt="User" width={187} height={187} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className={s.description}>
          <ul className={s.contacts}>
            <li className={s.contactItem}>
              <Icon iconId="phone" width={24} height={24} />
              <Link to="tel:+79543334455" className={s.contactLink}>
                +7 (954) 333-44-55
              </Link>
            </li>
            <li className={s.contactItem}>
              <Icon iconId="email" width={24} height={24} />
              <Link to={mailHref} className={s.contactLink}>
                {email}
              </Link>
            </li>
          </ul>
          <p className={s.text}>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты. <br /> <br /> В работе с клиентами недостаточно просто
            решить конкретную проблему или помочь справиться с трудностями. Не
            менее важно уделять внимание обмену знаниями: "Один из самых
            позитивных моментов — это осознание того, что ты помог клиенту
            перейти на совершенно новый уровень компетентности, уверенность в
            том, что после окончания проекта у клиента есть все необходимое,
            чтобы дальше развиваться самостоятельно". <br /> <br /> Помимо
            разнообразных проектов для клиентов финансового сектора, Сорин ведет
            активную предпринимательскую деятельность. Он является совладельцем
            сети клиник эстетической медицины в Швейцарии, предлагающей
            инновационный подход к красоте, а также инвестором других
            бизнес-проектов.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default UserProfile;
