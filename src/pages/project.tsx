import image1 from "../assets/icons8-linkedin.svg"
import image2 from "../assets/envelope-regular.svg"
import image3 from "../assets/envelope-regular.svg"
import image4 from "../assets/envelope-regular.svg"
import image5 from "../assets/envelope-regular.svg"


interface Project {
    title: string;
    description: string;
    imageSrc : string;

}

const projects: Project[] = [
        {
            title: 'project 1',
            description: 'Description of project 1 lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper dui a nisl elementum, vitae pharetra sapien viverra. Donec egestas, dui elementum porttitor finibus, elit felis tincidunt felis, porttitor molestie diam risus non lectus. Sed quis tempor elit. Aliquam erat volutpat. Vestibulum tincidunt odio eget elit pulvinar imperdiet. Morbi porttitor dui vel ultrices pellentesque. Maecenas eu dolor leo. Quisque cursus aliquet iaculis. Donec sed semper erat. Cras non volutpat dolor. Cras eu rutrum nisi, ut elementum nisi. Pellentesque eros leo, semper eu mattis in, placerat vel dolor. Nunc laoreet nibh quam, non tincidunt tellus vehicula non. Curabitur blandit sed ligula vel porttitor.',
            imageSrc: image1,
        },
        {
            title: 'project 2',
            description: 'Description of project 2 lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper dui a nisl elementum, vitae pharetra sapien viverra. Donec egestas, dui elementum porttitor finibus, elit felis tincidunt felis, porttitor molestie diam risus non lectus. Sed quis tempor elit. Aliquam erat volutpat. Vestibulum tincidunt odio eget elit pulvinar imperdiet. Morbi porttitor dui vel ultrices pellentesque. Maecenas eu dolor leo. Quisque cursus aliquet iaculis. Donec sed semper erat. Cras non volutpat dolor. Cras eu rutrum nisi, ut elementum nisi. Pellentesque eros leo, semper eu mattis in, placerat vel dolor. Nunc laoreet nibh quam, non tincidunt tellus vehicula non. Curabitur blandit sed ligula vel porttitor.',
            imageSrc: image2,
        },
        {
            title: 'project 3',
            description: 'Description of project 3 lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper dui a nisl elementum, vitae pharetra sapien viverra. Donec egestas, dui elementum porttitor finibus, elit felis tincidunt felis, porttitor molestie diam risus non lectus. Sed quis tempor elit. Aliquam erat volutpat. Vestibulum tincidunt odio eget elit pulvinar imperdiet. Morbi porttitor dui vel ultrices pellentesque. Maecenas eu dolor leo. Quisque cursus aliquet iaculis. Donec sed semper erat. Cras non volutpat dolor. Cras eu rutrum nisi, ut elementum nisi. Pellentesque eros leo, semper eu mattis in, placerat vel dolor. Nunc laoreet nibh quam, non tincidunt tellus vehicula non. Curabitur blandit sed ligula vel porttitor.',
            imageSrc: image3,
        },
        {
            title: 'project 4',
            description: 'Description of project 4 lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper dui a nisl elementum, vitae pharetra sapien viverra. Donec egestas, dui elementum porttitor finibus, elit felis tincidunt felis, porttitor molestie diam risus non lectus. Sed quis tempor elit. Aliquam erat volutpat. Vestibulum tincidunt odio eget elit pulvinar imperdiet. Morbi porttitor dui vel ultrices pellentesque. Maecenas eu dolor leo. Quisque cursus aliquet iaculis. Donec sed semper erat. Cras non volutpat dolor. Cras eu rutrum nisi, ut elementum nisi. Pellentesque eros leo, semper eu mattis in, placerat vel dolor. Nunc laoreet nibh quam, non tincidunt tellus vehicula non. Curabitur blandit sed ligula vel porttitor.',
            imageSrc: image4,
        } ,
        {
            title: 'project 5',
            description: 'Description of project 5 lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper dui a nisl elementum, vitae pharetra sapien viverra. Donec egestas, dui elementum porttitor finibus, elit felis tincidunt felis, porttitor molestie diam risus non lectus. Sed quis tempor elit. Aliquam erat volutpat. Vestibulum tincidunt odio eget elit pulvinar imperdiet. Morbi porttitor dui vel ultrices pellentesque. Maecenas eu dolor leo. Quisque cursus aliquet iaculis. Donec sed semper erat. Cras non volutpat dolor. Cras eu rutrum nisi, ut elementum nisi. Pellentesque eros leo, semper eu mattis in, placerat vel dolor. Nunc laoreet nibh quam, non tincidunt tellus vehicula non. Curabitur blandit sed ligula vel porttitor.',
            imageSrc: image5,
        },
   
];



export default projects;