export const fetchArticles = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(mockData), 1000);
    });

export const postNewArticle = ({ title, url }) =>
    new Promise((resolve, reject) => {
        setTimeout(
            () =>
                resolve({
                    id: Math.floor(Math.random() * 112432),
                    title,
                    url,
                    votes: 0,
                    activeComment: '',
                    comments: [],
                }),
            1000
        );
    });

const mockData = [
    {
        id: 1,
        title: 'interactive',
        url: 'https://google.ru/consectetuer/adipiscing.aspx',
        votes: 189,
        activeComment: '',
        comments: [
            {
                firstName: 'Conway',
                lastName: 'Stang-Gjertsen',
                message:
                    'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
                avatar:
                    'https://robohash.org/cupiditatenullanemo.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Anne',
                lastName: 'Martinon',
                message:
                    'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
                avatar:
                    'https://robohash.org/eumeiustotam.jpg?size=50x50&set=set1',
            },
        ],
    },
    {
        id: 2,
        title: 'Focused',
        url:
            'https://reverbnation.com/pede/justo/lacinia/eget/tincidunt/eget.jpg',
        votes: 206,
        activeComment: '',
        comments: [
            {
                firstName: 'Rebeca',
                lastName: 'Dillestone',
                message:
                    'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
                avatar:
                    'https://robohash.org/porrovoluptatemharum.jpg?size=50x50&set=set1',
            },
        ],
    },
    {
        id: 3,
        title: 'Organized',
        url: 'http://opera.com/mauris/sit/amet/eros/suspendisse/accumsan.html',
        votes: 161,
        activeComment: '',
        comments: [
            {
                firstName: 'Charla',
                lastName: 'Crees',
                message:
                    'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
                avatar:
                    'https://robohash.org/utcorruptivoluptatem.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Woody',
                lastName: 'Form',
                message:
                    'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
                avatar:
                    'https://robohash.org/laborequaeeligendi.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Araldo',
                lastName: 'Schenkel',
                message:
                    'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
                avatar:
                    'https://robohash.org/iustonumquamrerum.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Vasily',
                lastName: 'Glowacz',
                message: 'Duis bibendum.',
                avatar:
                    'https://robohash.org/molestiaehicquasi.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Elissa',
                lastName: 'Ivoshin',
                message:
                    'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
                avatar:
                    'https://robohash.org/omnisomnisarchitecto.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Cordy',
                lastName: 'Vennings',
                message: 'Etiam justo. Etiam pretium iaculis justo.',
                avatar:
                    'https://robohash.org/commodinihilsunt.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Jennine',
                lastName: 'Kettridge',
                message:
                    'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
                avatar:
                    'https://robohash.org/etquiasint.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Claudetta',
                lastName: 'McGarrity',
                message: 'Pellentesque ultrices mattis odio. Donec vitae nisi.',
                avatar:
                    'https://robohash.org/liberonamfugit.jpg?size=50x50&set=set1',
            },
        ],
    },
    {
        id: 4,
        title: 'data-warehouse',
        url: 'http://slate.com/purus/phasellus/in.json',
        votes: 207,
        activeComment: '',
        comments: [
            {
                firstName: 'Jock',
                lastName: 'Brickham',
                message:
                    'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
                avatar:
                    'https://robohash.org/corruptiaccusantiumat.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Corenda',
                lastName: 'Lorinez',
                message:
                    'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
                avatar:
                    'https://robohash.org/laboreaccusantiumdignissimos.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Brietta',
                lastName: 'Olford',
                message: 'Etiam faucibus cursus urna.',
                avatar:
                    'https://robohash.org/quoautqui.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Noni',
                lastName: 'Karpol',
                message:
                    'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
                avatar:
                    'https://robohash.org/sitveltenetur.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Priscilla',
                lastName: 'Burnes',
                message:
                    'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
                avatar:
                    'https://robohash.org/doloremquasienim.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Abbe',
                lastName: 'Whitby',
                message:
                    'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
                avatar:
                    'https://robohash.org/ducimusveniamsequi.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Kahaleel',
                lastName: 'Bloxholm',
                message: 'Nunc nisl.',
                avatar:
                    'https://robohash.org/itaqueblanditiisadipisci.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Amery',
                lastName: 'Stollberg',
                message: 'Fusce consequat.',
                avatar:
                    'https://robohash.org/etquaeratcumque.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Colet',
                lastName: 'Gaskin',
                message:
                    'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
                avatar:
                    'https://robohash.org/eaculpaasperiores.jpg?size=50x50&set=set1',
            },
        ],
    },
    {
        id: 5,
        title: 'static',
        url: 'https://surveymonkey.com/nulla/dapibus/dolor.jpg',
        votes: 17,
        activeComment: '',
        comments: [
            {
                firstName: 'Temp',
                lastName: 'Sandeland',
                message: 'Vivamus tortor. Duis mattis egestas metus.',
                avatar:
                    'https://robohash.org/repellateteaque.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Mara',
                lastName: 'Emmines',
                message:
                    'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
                avatar:
                    'https://robohash.org/rationesitmagni.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Thomasa',
                lastName: 'Fryd',
                message:
                    'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
                avatar:
                    'https://robohash.org/omnisquiavoluptate.jpg?size=50x50&set=set1',
            },
        ],
    },
    {
        id: 6,
        title: 'Multi-tiered',
        url: 'https://eepurl.com/nulla/eget/eros.png',
        votes: 218,
        activeComment: '',
        comments: [
            {
                firstName: 'Gabriella',
                lastName: 'Allain',
                message:
                    'Quisque id justo sit amet sapien dignissim vestibulum.',
                avatar:
                    'https://robohash.org/voluptatemillumnisi.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Nanine',
                lastName: 'Keyhoe',
                message:
                    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                avatar:
                    'https://robohash.org/nisiinventoreet.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Shalom',
                lastName: 'Fundell',
                message:
                    'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
                avatar:
                    'https://robohash.org/insunteaque.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Elena',
                lastName: 'Golby',
                message:
                    'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
                avatar:
                    'https://robohash.org/enimisteaut.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Austin',
                lastName: 'Reuben',
                message: 'Vestibulum ac est lacinia nisi venenatis tristique.',
                avatar:
                    'https://robohash.org/pariaturautquidem.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Davidde',
                lastName: 'Judron',
                message:
                    'Nullam sit amet turpis elementum ligula vehicula consequat.',
                avatar:
                    'https://robohash.org/consecteturadquo.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Lesley',
                lastName: 'Earland',
                message:
                    'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
                avatar:
                    'https://robohash.org/cumetcorporis.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Allayne',
                lastName: 'Edwicker',
                message:
                    'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
                avatar:
                    'https://robohash.org/enimfugapariatur.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Harbert',
                lastName: 'Georgelin',
                message:
                    'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
                avatar:
                    'https://robohash.org/rerumsitet.jpg?size=50x50&set=set1',
            },
        ],
    },
    {
        id: 7,
        title: 'Virtual',
        url: 'http://indiegogo.com/sollicitudin.xml',
        votes: 68,
        activeComment: '',
        comments: [
            {
                firstName: 'Skippie',
                lastName: 'Habbergham',
                message:
                    'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
                avatar:
                    'https://robohash.org/quisesserem.jpg?size=50x50&set=set1',
            },
        ],
    },
    {
        id: 8,
        title: 'instruction set',
        url: 'https://pbs.org/turpis/sed/ante/vivamus/tortor/duis/mattis.png',
        votes: 6,
        activeComment: '',
        comments: [
            {
                firstName: 'Woodrow',
                lastName: 'Stubbin',
                message:
                    'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
                avatar:
                    'https://robohash.org/accusamuslaboriosamaliquid.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Lilah',
                lastName: 'Segeswoeth',
                message:
                    'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
                avatar:
                    'https://robohash.org/officiadeseruntullam.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Minta',
                lastName: 'Thrussell',
                message: 'Praesent blandit.',
                avatar:
                    'https://robohash.org/faceresuntconsequatur.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Edythe',
                lastName: 'Bowra',
                message: 'Morbi vel lectus in quam fringilla rhoncus.',
                avatar:
                    'https://robohash.org/dolorefugasapiente.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Devondra',
                lastName: 'Coulthurst',
                message:
                    'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
                avatar:
                    'https://robohash.org/etestharum.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Elvis',
                lastName: 'Houndson',
                message: 'Cras non velit nec nisi vulputate nonummy.',
                avatar:
                    'https://robohash.org/nemoconsequatursaepe.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Karla',
                lastName: 'Haxbie',
                message:
                    'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
                avatar:
                    'https://robohash.org/quietminima.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Kale',
                lastName: 'Swateridge',
                message: 'Nullam molestie nibh in lectus.',
                avatar:
                    'https://robohash.org/aspernaturporromolestiae.jpg?size=50x50&set=set1',
            },
        ],
    },
    {
        id: 9,
        title: 'optimal',
        url: 'http://sourceforge.net/consequat/morbi/a/ipsum/integer/a.json',
        votes: 38,
        activeComment: '',
        comments: [
            {
                firstName: 'Shell',
                lastName: 'Ciani',
                message:
                    'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
                avatar:
                    'https://robohash.org/quiquibusdamvitae.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Elsbeth',
                lastName: 'McTear',
                message:
                    'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
                avatar:
                    'https://robohash.org/autipsumvoluptate.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Baxy',
                lastName: 'Van der Veldt',
                message:
                    'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
                avatar:
                    'https://robohash.org/molestiasvoluptatesest.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Allissa',
                lastName: 'Lohde',
                message:
                    'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
                avatar:
                    'https://robohash.org/autoccaecatiaut.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Miner',
                lastName: 'Strong',
                message:
                    'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
                avatar:
                    'https://robohash.org/laboriosamaccusantiumarchitecto.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Cybil',
                lastName: 'Peasgood',
                message: 'Praesent blandit.',
                avatar:
                    'https://robohash.org/sapienteconsequatursunt.jpg?size=50x50&set=set1',
            },
            {
                firstName: 'Diana',
                lastName: 'Salliere',
                message: 'Nullam varius. Nulla facilisi.',
                avatar:
                    'https://robohash.org/numquamreiciendiset.jpg?size=50x50&set=set1',
            },
        ],
    },
    {
        id: 10,
        title: 'Enterprise-wide',
        url: 'https://woothemes.com/at/feugiat.json',
        votes: 260,
        activeComment: '',
        comments: [
            {
                firstName: 'Nannette',
                lastName: 'Lorentz',
                message:
                    'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
                avatar:
                    'https://robohash.org/velperspiciatisqui.jpg?size=50x50&set=set1',
            },
        ],
    },
];
