export class CreatePizzaDto {
    code: string
    name: string
    libelle: string
    prix: number
    categorie: string
    version: string
    ingredient: Array<number>
}
