import cebil from '../../assets/cebil.png'

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Dashboard', href: '#', current: true },
];


const Nav: React.FC = () => {
    return (
        <div className="navbar bg-gray-light shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><img src={cebil} alt="imagen logo residencia cebil" className='h-10' /></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        navigation.map((item: NavigationItem) => (
                            <li key={item.name}><a>{item.name}</a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nav;







/*

<li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>

*/