import Image from "next/image";


export default function UserInfo({ user }) {
    
    return (
        <div>
            <p className="text-lg">Hi, <b>{user?.name}</b></p>
            <Image
                src={user?.image}
                alt={user.name}
                height={64}
                width={64}
                className="rounded-full mt-2"
            />
        </div>
    )
}
