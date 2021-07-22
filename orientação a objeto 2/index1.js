import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupança } from "./Conta/ContaPoupança.js"
import { ContaSalario } from "./Conta/ContaSalario.js"

const cliente1 = new Cliente("Henrique", 54101416877)

const contaCorrenteHenrique = new ContaCorrente ( cliente1, 1001)
const contaPoupança = new ContaPoupança( 200, cliente1, 1001)
const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(100)
contaSalario.sacar(10)

console.log(contaSalario)
console.log(contaPoupança)
console.log(contaCorrenteHenrique)
