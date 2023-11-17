import { useContext } from "react";
import { AppStateContext } from "../../ContextApi/AppStateContext";

const Dashboard = () => {
  const { adminSideBar, setAdminSideBar } = useContext(AppStateContext);
  return (
    <div className={`${adminSideBar ? "width-adjust" : "w-full"} `}>
      <h1 className="text-5xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eum
        dolore, fugit voluptatem deserunt officiis. Ipsa esse alias delectus
        quasi, provident consequuntur ab similique quae dolorem iure quod
        aliquid est consequatur saepe debitis praesentium tenetur voluptatibus
        modi ea. Non, saepe aut? Distinctio quae enim, iste officia inventore
        esse amet ex consectetur recusandae a tempore beatae ullam soluta eos
        tempora ut, voluptate quisquam facilis accusantium molestiae est
        laboriosam odio voluptas atque! Aliquid voluptates exercitationem optio
        enim ipsum tenetur beatae illum, soluta possimus sit ducimus voluptas?
        Excepturi sapiente nostrum fugiat id repellat inventore error labore
        dolore blanditiis, velit debitis a perferendis voluptates, eligendi
        dolor totam cupiditate accusamus quaerat. Placeat excepturi aspernatur
        et sapiente ducimus dicta reiciendis iusto ab numquam, magnam quidem
        laudantium animi voluptate amet, inventore quas! Assumenda maxime ipsa
        placeat, ad autem porro eaque voluptatum sed officiis aperiam quibusdam
        impedit iusto! Accusantium rerum tempora delectus eos enim, dolorum
        quibusdam ab asperiores expedita ratione autem temporibus? Quod neque ea
        alias, tenetur vitae assumenda, accusamus explicabo soluta quas at
        cupiditate nobis distinctio possimus culpa id fugiat. Sapiente doloribus
        delectus ullam veritatis, quas assumenda? Assumenda libero repudiandae
        quidem itaque pariatur illum. Officiis itaque illo nisi et accusantium,
        exercitationem quaerat amet ea aperiam omnis in quas vel voluptatem,
        nobis est blanditiis eligendi excepturi obcaecati quia inventore. Nobis
        explicabo dicta, enim molestiae impedit doloribus distinctio, quia sunt
        dolorem tempore qui animi natus provident mollitia nisi hic quam,
        maiores laboriosam ad. Similique earum ipsa facilis dignissimos quisquam
        quae reprehenderit eum rerum veniam id temporibus magnam aliquid
        mollitia nisi ut asperiores provident minus impedit magni ea maiores,
        autem tenetur? Aperiam eligendi est asperiores necessitatibus iusto
        corporis optio, libero unde aspernatur fuga illo quasi temporibus totam
        molestiae voluptate odio nobis voluptatum non dolores, eos magni.
        Placeat voluptas mollitia debitis quasi, culpa eum ad quod blanditiis
        repellendus aspernatur reiciendis id?
      </h1>
    </div>
  );
};

export default Dashboard;
