import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";

const AdminPage = () => {
    return (
        <>
            <Header>
                Editor options appear when needed
            </Header>
            {
                [1, 2, 3, 4, 5, 6].map(item => <div className="mt-5 border-2 bg-amber-100 rounded-2xl p-10" key={item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium dolor maxime mollitia. Fugit similique ea et ducimus molestias. Obcaecati natus modi omnis labore autem minus, expedita quos mollitia alias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsa corporis. Explicabo maiores accusantium, tenetur voluptatem assumenda temporibus repudiandae similique in iusto nobis, ipsam ab voluptatibus eius voluptate distinctio at consequuntur numquam fugit! Quidem minus, assumenda perspiciatis asperiores ratione libero exercitationem dolorum quis, perferendis molestias iusto non mollitia modi tempora illo earum ab, fugiat nostrum quas tenetur itaque repudiandae nemo nesciunt! Sint molestiae quod nobis? Autem omnis voluptates esse eum? Ipsa excepturi provident cupiditate sequi soluta aperiam obcaecati vero quia sint consequuntur molestiae inventore, nisi molestias illum sit distinctio non, assumenda perferendis ipsum ad laboriosam pariatur aliquid. Perspiciatis voluptatem repellat nihil excepturi, eius quos. Temporibus odio ipsa in id nostrum velit laudantium illo, accusantium ratione error, libero fugiat aliquid quisquam nesciunt assumenda voluptatum debitis architecto. Dolorum hic sed dolores sint tempora blanditiis autem, accusamus minima quisquam eum ipsa esse eaque quibusdam nemo vero inventore aliquam provident at quos voluptates. Exercitationem?
                </div>)
            }

        </>
    )
}

export default AdminPage;