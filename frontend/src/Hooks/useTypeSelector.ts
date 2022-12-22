import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../Redux/Store/Store";


export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector