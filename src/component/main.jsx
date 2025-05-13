import {my_data} from "./Data";

function Page(){

    return(
        <div className="container">
            

            {my_data.map((version,index)=>
                <div className="veriler" id={index}>
                    <img src={version.img} alt="" />
                    <h2>{version.title}</h2>
                    <p className="content">"{version.content}"</p>
                    <h3>Dr.Angelu Yu</h3>
                    <p>{version.price}TL</p>
                    <a href={version.link}>Click to buy it</a>

                </div>
            )}
        </div>
    )

}

export default Page;