import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { customer1, customer2, voopooArgusG, argusP1, koko, UwellCaliburn} from "../assets/images";
import { img1, img2, img3 } from '../assets/img'
import { flv1, flv2, flv3, flv4, flv5, flv6, flv7, flv8 } from '../assets/img/flavors/index'
import { pod0, pod1, pod2, pod3, pod4, pod5, gk1, gk2, gk3 } from "../assets/img/pods";

export const navLinks = [
    { to: "/", label: "Home" },
    {
       
        label: "Products",
        subMenu: [
            { to: "/pods", label: "Pods" },
            // { to: "/vapes", label: "Vapes" },
            { to: "/flavors", label: "Flavors" },
        ],
    },
    { href: "/#contact-us", label: "Contact Us" },
    { href: "/#about-us", label: "About Us" },
    {to: '/my-orders', label: 'My Orders'}
];

export const statistics = [
    { value: '20+', label: 'Brands' },
    { value: '100+', label: 'Flavors' },
    { value: '10k+', label: 'Customers' },
];







export const products = [
    {
        imgURL: pod0,
        title: "Voopoo Argus P1 Pod",
        price: 7499,
        description: `Voopoo Argus P1 20W Pod System, features an 800mAh battery, 5-20W output range, and delivers exceptional vapor from the 0.7ohm or 1.2ohm pod. Constructed from durable zinc alloy, the Argus P1 Pod System chassis is lightweight but resilient to light falls and drops. Constructed from durable zinc-alloy, the chassis of the Argus P1 Pod System is lightweight but resilient to light falls and drops. In addition, the 0.7ohm and 1.2ohm Argus Pods are leak-free and can hold up to 2mL of your favorite eJuice or nicotine salts. Furthermore, the Argus P1 Kit offers an airflow adjustment switch, allowing the user to alter the airflow to the desired amount.`,
        quantity: 1,
        category: 'pods',
        id:0
    },
    {
        imgURL: pod1,
        title: "Voopoo Drag 4 Pod",
        price: 19999,
        description:`Experience power and style with the Voopoo Drag 4 Pod Mod 177W kit price in Pakistan. This sleek and elegant vape device boasts a maximum output of 177W, making it a perfect choice for experienced vapers who demand high performance. The device comes with a convenient 4.5ml pod that is compatible with Voopoo's PnP coil series, allowing you to customize your vaping experience to your liking. The device is powered by dual 18650 batteries, ensuring long-lasting use, and features an innovative GENE.FAN 2.0 chipset that provides a smooth and consistent vaping experience. Get your VOOPOO DRAG 4 POD MOD KIT PRICE IN PAKISTAN today and enjoy the perfect combination of power and style.`,
        quantity: 1,
        category: 'pods',
        id:1
    },
    {
        imgURL: pod2,
        title: "Voopoo Argus G Pod",
        price: 7499,
        description:`Adopting VOOPOO ITO specialized atomization technology for MTL vaping, ARGUS G delivers a stable taste with a 5W-25W wattage setting and prolongs the lifespan of coil. ARGUS G is suitable for FREE BASE and nicotine salt e-liquid and one coil. Besides, a multi-function button with a OLED screen, the adjustable power and airflow function, recording puff counts and manual lock/unlock bring vapers a more personalized experience.
        The VOOPOO ARGUS G 25W Pod Kit features a 2ml capacity ARGUS POD cartridge, which utilizes 0.7Ω and 1.2Ω resistance coils to produce rich and flavorful vapor. Whether you prefer a tight, cigarette-like draw or a more open and airy one, the ARGUS POD cartridge has you covered.
        Crafted from durable aluminum alloy and PCTG materials, this device is both stylish and rugged. It's designed to withstand everyday wear and tear, making it the perfect companion for on-the-go vaping.
        Overall, the VOOPOO ARGUS G 25W Pod Kit is an excellent choice for vapers who want a compact and reliable device that delivers satisfying vapor production. Whether you're a seasoned vaper or just starting out, this device is sure to impress. So why wait? Order your VOOPOO ARGUS G 25W Pod Kit today and experience the ultimate in vaping satisfaction.
        `,
        quantity: 1,
        category: 'pods',
        id:2
    },
    {
        imgURL: pod3,
        title: "Uwell Caliburn GK2 Pod",
        price: 6999,
        description:`Uwell Caliburn GK2 Pod System Kit is the right blend of cyberpunk, steampunk, and futuristic. Firstly, the Lightbars in the shape of KOKOs sparkle brilliantly through the curved glass. Secondly, the Light and vibration functions enable new methods of communicating with vapers. In addition to that, the light emits distinct colors, and the device vibrates in different states at various power levels.
        In addition, Vapers will have a more engaging experience thanks to the two designs. Moreover, the Caliburn GK2 cartridge has an airflow fine-tuning wheel at the bottom and is compatible with three CALIBURN G series coils and Caliburn G2 Coils (0.8/1.0/1.2ohm). With a total weight of only 45.2g and a lanyard included, the CALIBURN GK2 is extremely portable. Furthermore, it might also be a nice addition to your everyday attire. Above all, this device is a must-have for all the KOKO lovers out there.
         `,
        quantity: 1,
        category: 'pods',
        id:3,

        imgs: [gk1, gk2, gk3]
    },
    {
        imgURL: pod4,
        title: "Voopoo V.Thru Pro Pod",
        price: 6499,
        description:`Discover the VOOPOO V.Thru Pro 25W Pod System, featuring an integrated 900mAh battery, two integrated coil pod options, and uses a draw-activated mechanism. Constructed from lightweight aluminium alloy, the sturdy but lightweight chassis is ideal for those on the go, eliminating excessive weight but also maintaining a reliable against light falls and drops. Offering a 900mAh battery, the V.THRU Pro calls upon the GENE Chipset to manage the power output, firing between 5-25W. Firing in a draw-activated manner, the VOOPOO V.Thru Pro Pods come in a 0.7ohm and 1.2ohm Coil options, each installed with a condensate chamber to prevent leaking issues with vaporized e-Liquid, eliminating up to 75% of the potentially leaked condensated.        `,
        quantity: 1,
        category: 'pods',
        id:4
    },
    {
        imgURL: pod5,
        title: "Uwell Caliburn A2",
        price: 4499,
        description:`Caliburn A2 Kit adopts ultra-light materials with unique ergonomic design for better grip. The exclusive PRO-FOCS tech of Uwell would bring you the most authentic flavor. With an internal 520mAh battery, Caliburn A2 delivers effortless, all-day vaping on the go.
        You can vape with two distinct operations; direct draw or button draw. The battery only takes 35mins to 90% charged with Type-C. Uwell Caliburn A2 Pod comes with 2ml e-juice capacity, it features top filling system to prevent leakage. The perfect lip fitting design and magnetic suction give you a better vaping experience.
         `,
        quantity: 1,
        category: 'pods',
        id:5
    },





















    // flavors
    {
        imgURL: flv1,
        title: "Tokyo Iced Strawberry Watermelon 60ml",
        price: 123,
        description:"Presenting the new flavor of Tokyo Iced Strawberry Watermelon (60ml) - a tempting e-liquid that will take you to the trip of paradise, when your taste buds taste it! Give yourself a treat with the combo of sweet and lush fusion of ripe strawberries and refreshing watermelon, mixed to give you a perfect flavor.",
        quantity: 1,
        category: 'flavors',
        id:6
    },
    {
        imgURL: flv2,
        title: "Tokyo Iced Strawberry Mango 60ml",
        price: 2950,
        description:"Tokyo Iced Strawberry Mango 60ml: Take a trip to the tropics with this refreshing blend of sweet strawberries and juicy mangoes, with a cool menthol finish. This delicious vape juice is perfect for all-day vaping, and it's certain to become your new favorite summer flavor.",
        quantity: 1,
        category: 'flavors',
        id:7
    },
    {
        imgURL: flv3,
        title: "Tokyo Iced Strawberry Lychee 60ml",
        price: 2950,
        description:"Tokyo Iced Strawberry Lychee 60ml is a bracing mix of sweet strawberries and succulent lychees, with the coldness of menthol finish. This pleasing vape juice is easy to use all day long, and it's definite to become your new choice for summer.",
        quantity: 1,
        category: 'flavors',
        id: 8
    },
    {
        imgURL: flv4,
        title: "Tokyo Iced Strawberry Kiwi 60ml",
        price: 2950,
        description:"Are you tired of vape flavors and want to try something refreshing, Tokyo Iced Strawberry Kiwi 60ml is a sweet combination of fresh strawberries and cool menthol that gives cool effect. It is a delicious vape juice. Great for all day vaping.",
        quantity: 1,
        category: 'flavors',
        id: 9
    },
    {
        imgURL: flv5,
        title: "Tokyo Iced Peach Melon 60ml",
        price: 2950,
        description:"Tokyo Iced Peach Melon 60ml is a delicious and refreshing vape juice that combines the sweet and juicy flavors of peach and melon with a cool menthol finish. It is the perfect vape juice for vapers who enjoy fruity flavors and are looking for a refreshing vape juice that will help them stay cool on hot days.",
        quantity: 1,
        category: 'flavors',
        id:10
    },
    {
        imgURL: flv6,
        title: "Tokyo Iced Fruit Bomb 60ml",
        price: 2950,
        description:"Tokyo Iced Fruit Bomb 60ml is a delicious and refreshing vape juice that will transport you to the streets of Tokyo. This fruit bomb is a blend of sweet and tart fruits, including watermelon, strawberry, and lime. The icy menthol finish will leave you feeling cool and refreshed.",
        quantity: 1,
        category: 'flavors',
        id:11
    },
    {
        imgURL: flv7,
        title: "Tokyo Iced Cranberry Raspberry 60ml",
        price: 2950,
        description:"Unlock the all new Tokyo Iced Cranberry Raspberry 60ml e-liquid that is now available at Vape Bazaar. And get the perfect taste of icy coolness and luscious cranberry raspberry flavor.Its a High quality E-juice made with expertise to provide the gentle and refreshing charm of vaping with every session. It is high quality salt that will make you crave more and more. Easy to use for seasoned as well as new vapers. Tokyo Iced ensures the user satisfaction and gives a sleek, joyful blend of fruity sweetness and a cooling effect.",
        quantity: 1,
        category: 'flavors',
        id:12
    },
    {
        imgURL: flv8,
        title: "Tokyo Iced Blueberry Watermelon 60ml",
        price: 2950,
        description:"The new flavor of Tokyo iced blueberry is a unique and delicious e-liquid that is ideal for hot summery days. When you're exhausted and look for something refreshing like a blend of blueberry, watermelon, and menthol that will surely quench your thirst. The flavor of blueberry is sweet and tart. Watermelons gives a juicy whereas menthol provides refreshing and cool effect.",
        quantity: 1,
        category: 'flavors',
        id:13
    },
    
]

        



export const Heroproducts = [
    {
        imgURL: img1,
        title: "koko Pod",
        price: 200,
        description: "One of the best and finest pod of the town",
        quantity: 1,
        category: 'pods',
        id: 'h1'
    },
    {
        imgURL: img2,
        title: "argusP1 Pod",
        price: 2200,
        description:"One of the best and finest pod of the town i love it it is amazing pod.",
        quantity: 1,
        category: 'pods',
        id: 'h2'
    },
    {
        imgURL: img3,
        title: "voopooArgusG Pod",
        price: 2200,
        description:"One of the best and finest pod of the town i love it it is amazing pod.",
        quantity: 1,
        category: 'pods',
        id: 'h3'
    },
]





























// export const productss = [
//     {
//         imgURL: koko,
//         title: "koko Pod",
//         price: 200,
//         description: 'One of the best and finest pod of the town',
//         quantity: 1
//     },
//     {
//         imgURL: voopooArgusG,
//         title: "Nike Air Jordan-10",
//         price: "$210.20",
//         description: 'Best Shoes you can ever fing in the market',
//         quantity: 1
//     },
//     {
//         imgURL: UwellCaliburn,
//         title: "Nike Air Jordan-100",
//         price: "$220.20",
//         description: 'Best Shoes you can ever fing in the market',
//         quantity: 1
//     },
//     {
//         imgURL: argusP1,
//         title: "Nike Air Jordan-001",
//         price: 230,
//         description: 'Best Shoes you can ever fing in the market',
//         quantity: 1
//     },
// ];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Hasnain Aslam',
        rating: 4.4,
        feedback: "The pod kit and the flavors are amazing. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Shoaib Malik',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer2,
        customerName: 'Zia Ur Rahman',
        rating: 4.5,
        feedback: "I'm in love with their products. Their customer service experience is also great!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Voopoo Argus P1", link: "/product/Voopoo%20Argus%20P1%20Pod" },
            { name: "Voopoo Drag 4", link: "/product/Voopoo%20Drag%204%20Pod" },
            { name: "Voopoo Argus G", link: "/product/Voopoo%20Argus%20G%20Pod" },
            { name: "Uwell Caliburn GK2", link: "/product/Uwell%20Caliburn%20GK2%20Pod" },
            { name: "Voopoo V.Thru Pro", link: "/product/Voopoo%20V.Thru%20Pro%20Pod" },
            { name: "Uwell Caliburn A2", link: "/product/Uwell%20Caliburn%20A2" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@cignition.com", link: "mailto:customer@ecignition.com" },
            { name: "+923016667656", link: "tel:+923016667656" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
