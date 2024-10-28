import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import {Link} from "react-router-dom"
import Thumbnail from "../images/blog1.jpg"

const PostDetails = () => {
  return (
    <section className='post-detail'>
       <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor/>
          <div className='post-detail-buttons'>
            <Link to={`/posts/werwer/edit`} className="btn sm primary">Edit</Link>
            <Link to={`/posts/werwer/delet`} className="btn sm danger">Delet</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className='post-detail__thumbnail'>
          <img src={Thumbnail} alt=''/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum reprehenderit vel provident, laudantium, totam est inventore labore nihil itaque quae quisquam adipisci. Cupiditate atque ex illo saepe in quisquam tenetur nam? Perspiciatis laudantium error, possimus obcaecati hic iure necessitatibus vel!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nesciunt blanditiis beatae doloremque? Quos, vero perferendis inventore ipsa facere ducimus iusto corporis iure libero tempore quia ad animi rem esse dolorum facilis incidunt cupiditate, alias accusantium mollitia reprehenderit tempora hic autem repellat. Necessitatibus vitae optio, libero accusamus dolore, beatae iusto tenetur unde minima ullam molestiae!
        </p>
        <p>
        
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sequi perspiciatis voluptas dolorum, provident ad quis distinctio tempora laborum accusantium ipsam temporibus fuga sint neque cum ipsa repudiandae id mollitia deleniti possimus officiis eaque accusamus corrupti. Provident temporibus dolores mollitia veniam sint, ipsa, minus reprehenderit pariatur dolorum nulla sed beatae! Dignissimos repellendus ut distinctio voluptatem ipsum ducimus corporis atque explicabo iste. Nam voluptate illum impedit, quo facilis expedita laborum consectetur magni. Eos dolor minima tenetur vitae eum excepturi, beatae quisquam error accusamus exercitationem assumenda delectus facilis asperiores iure similique, sed nam debitis magni! Sed quidem minus consectetur at, asperiores corporis eos ducimus maiores. Nemo suscipit iure quas consectetur, laborum ea quaerat?
       </p>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vitae laboriosam autem excepturi, quia deleniti quidem sit praesentium magni dolores esse eligendi inventore voluptas itaque odit tenetur? Obcaecati est nostrum adipisci culpa sunt. Doloremque placeat dolore voluptate animi eum error doloribus quod aut, tempore modi unde fugiat soluta hic laboriosam dicta incidunt eos dolorum neque. Ducimus velit aperiam repudiandae ex aliquid optio et. Quod nesciunt voluptatum ullam reiciendis, animi beatae assumenda ad mollitia architecto possimus. Odio itaque aliquid beatae officia provident distinctio ad ex veniam eveniet sed voluptas natus, aperiam eius facilis reprehenderit expedita fugiat at unde vitae excepturi qui. Quasi accusantium voluptate tempore quia praesentium iusto libero nihil fugit nostrum earum unde ad culpa, magnam, velit consectetur! Enim inventore quam ea quos nihil cum assumenda porro, officiis quod fugiat voluptate corporis excepturi harum deserunt nulla fugit. Aliquam beatae incidunt quam assumenda quae et odit consequuntur reprehenderit dolor, perferendis reiciendis fugiat blanditiis voluptatum quibusdam ut maiores fugit laboriosam dolorem velit quo impedit dignissimos modi ipsum. Quia fugit quam corrupti qui aspernatur modi nisi hic alias mollitia? Deleniti perspiciatis officia libero ducimus eaque, laudantium eum expedita eos natus labore accusantium fugit, suscipit maiores repellendus. Quibusdam, impedit nam! Nulla facere ipsam tenetur.
       </p>
       
       <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo similique quam doloribus molestias ipsum sunt esse deserunt pariatur neque provident.
       </p>

       </div>
    </section>
  )
}

export default PostDetails
