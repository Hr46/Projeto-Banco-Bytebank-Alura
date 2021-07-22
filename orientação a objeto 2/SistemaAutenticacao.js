/* 
ser autenticavel significa ter ao método  autenticar

ducky type serve para programas com fraquissima tipagem, Poilimorfismoobjetos diferentes tratados da mesma forma 
*/

export class SistemaAutenticacao{
    static login(Autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(Autenticavel)){
             return Autenticavel.autenticar(senha) 
        }
       return false
    }

    static ehAutenticavel(Autenticavel){
        return "autenticar" in Autenticavel && 
        Autenticavel.autenticar instanceof Function
    }
}