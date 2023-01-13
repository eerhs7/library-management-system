import '../styles/AdminDashboard.css'

const AdminDashboard = () => {
    let content = [
        {
            title: "Greenwich Library to Host an Evening of Broadway Cabaret",
            author: "By Erika Berlin on January 12, 2023",
            desc: "The Friends of Greenwich Library are pleased to host a special night of cabaret-style performances with How I Got to…",
            link: "Take a look"
        },
        {
            title: "Signature Series: In the News with Fareed Zakaria",
            author: "By Erika Berlin on January 11, 2023",
            desc: "Greenwich Library’s Signature Series is pleased to welcome bestselling author and journalist Fareed Zakaria to the Library’s Berkley Theater on Thursday,…",
            link: "Take a look"
        },
        {
            title: "At the Library this January …",
            author: "By Erika Berlin on December 29, 2022",
            desc: "Greenwich Library has a full schedule of (free!) enrichment events throughout January. Speak with a librarian or check the online…",
            link: "Take a look"
        }
    ]
    return (
        <div className="admin_dash">
            <div className="img">
                <p>Welcome to Admin Dashboard</p>
            </div>

            <div className="dash_content">
                {content.map(data => (
                    <div className='dash_contents'>
                        <div className="dash_content_img"></div>

                        <div className="info">
                            <h1><u id="titleU">{data.title}</u></h1>
                            <p id="adminAuth">{data.author}</p>
                            <p id="adminDesc">{data.desc}</p>
                            <a id="adminLink" href="#">{data.link}</a>
                        </div>

                    </div>
                ))}



            </div>

        </div>
    );
}

export default AdminDashboard;