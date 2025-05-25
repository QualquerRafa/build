function populate_cards(){
    for (let i=0; i < Object.keys(episodes).length; i++){
        let ep_id = Object.keys(episodes)[i]
        let ep_data = episodes[ep_id]

        console.log(ep_id, ep_data)
        create_card(ep_id, ep_data)
    }
}

function create_card(episode_indentifier, episode_loaded_data){
    let template = `
        <table id="ep_${episode_indentifier}" style="width: 75%; max-width: 1200px; margin-bottom: 24px">
            <tbody style="text-align: center; background-color: cornsilk;">
                <tr style="background-color: black; color: whitesmoke;">
                    <th style="padding: 6px; font-size: 18px;" id="ep_name_${episode_indentifier}"></th>
                </tr>

                <tr>
                    <td><img id="img_${episode_indentifier}" src="img/01.png" style="max-height: 75px;"></td>
                </tr>
                <tr>
                    <td style="text-align: justify; padding: 10px;" id="desc_${episode_indentifier}"></td>
                </tr>
            </tbody>
        </table>
    `;

    //Initialize information about project at looping index
    let episode_image = episode_indentifier
    let episode_title = episode_loaded_data.title
    let episode_description = episode_loaded_data.desc

    //Create wrapper div with ID first
    var wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'episode_' + episode_indentifier)
    wrapper.innerHTML = template
    //Add to HTML body, inside 'projects_containter'
    document.getElementById("episodes_container").append(wrapper)
   
    //Visually sUpdate with information about each project
    document.getElementById("img_" + episode_indentifier).src = "img/"+ episode_image +".png"
    document.getElementById("ep_name_" + episode_indentifier).innerHTML = "Episódio " + episode_indentifier + " - " + episode_title
    document.getElementById("desc_" + episode_indentifier).innerHTML = episode_description
    
}