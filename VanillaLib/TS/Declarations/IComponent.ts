
export default interface IComponent {

    create() : void;
    setContainer(container: HTMLElement) : void;
    set(element : HTMLElement): void;
    get() : HTMLElement;
    event(): void;
}