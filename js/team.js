$(function(){
    
    let team = [
        {   
            "id": "0",
            "name": "Name",
            "position": "Position",
            "source": "betmen.jpg",
            "linkedin": "#linkedin-acount-link"
        },
        {   
            "id": "1",
            "name": "Name",
            "position": "Position",
            "source": "betmen.jpg",
            "linkedin": "#linkedin-acount-link"
        },
        {   
            "id": "2",
            "name": "Name",
            "position": "Position",
            "source": "betmen.jpg",
            "linkedin": "#linkedin-acount-link"
        },
        {   
            "id": "3",
            "name": "Name",
            "position": "Position",
            "source": "betmen.jpg",
            "linkedin": "#linkedin-acount-link"
        },
        {   
            "id": "4",
            "name": "Name",
            "position": "Position",
            "source": "betmen.jpg",
            "linkedin": "#linkedin-acount-link"
        },
        {   
            "id": "5",
            "name": "Name",
            "position": "Position",
            "source": "betmen.jpg",
            "linkedin": "#linkedin-acount-link"
        }
    ]
    
    
    function teamTemplate(){
        let linkedinIcon = '<i class="fa fa-linkedin-in"></i>';

        team.forEach(element => {

            $('<figure/>', {
                id: 'meamber' + element.id,
                class: 'col-6 col-sm-4 col-md-3 meamber'
            }).appendTo('#team .row');

            $('<div/>',{
                id: 'meamber-img' + element.id,
                class: 'img-container'
            }).appendTo('#meamber'+ element.id);

            $('<img/>',{
                class: 'img-fluid',
                src: 'assets/team/' + element.source
            }).appendTo('#meamber-img' + element.id);

            $('<h5/>',{
                text: element.name
            }).appendTo('#meamber' + element.id);
            $('<span/>',{
                text: element.position
            }).appendTo('#meamber' + element.id);
            $('<a/>',{
                href: element.linkedin,
                title: element.name,
                alt: element.name,
                target: '_blank',
                html: linkedinIcon
            }).appendTo('#meamber' + element.id);
        });
    }
    
    teamTemplate();
});