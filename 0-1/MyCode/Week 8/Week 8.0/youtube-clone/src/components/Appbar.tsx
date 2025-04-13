import { Searchbar } from "./Searchbar"

export const Appbar = () => {
    return <div className="flex justify-between pt-1 p-3">
        <div className="text-md inline-flex items-center pd-2">
            Youtube
        </div>
        <div>
            <Searchbar></Searchbar>
        </div>
        <div>
            Sign in
        </div>
    </div>
}