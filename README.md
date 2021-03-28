# Angular-groeidocument

In dit groei document ga ik per opdracht kort over wat ik heb geleerd. de bijbehorende code kunt u vinden in het mapje Angular tour of heroes

# Opdracht 1

## Tour of heroes 1

In stap 1 van tour of heroes leer je hoe je een nieuw component toe kan voegen en deze kan tonen en aanpassen in de webapplicatie.

Deze kan aangemaakt worden doormiddel van het volgende commando in te voeren in powershell/commandprompt:

```
ng generate component heroes
```

Nadat deze uit is gevoerd is er een mapje toegevoegd aan je project met de naam: heroes. Het is belangrijk dat je in het component typescript file aangeeft dat het een component is met `@Component` symbol, en hierin de selector, templateURL en styleURLs meegeeft, zodat angular weet waar deze staan.

Doormiddel van de selector kan angular de hero component toevoegen aan de main page:
```html
<app-heroes></app-heroes>
```

Er kan een interface aangemaakt worden om de "hero" meer dan een naam te geven en er een object van te maken. Om deze interface dan weer te gebruiken moet hij geimport worden. Zodra deze geimport is en er een hero object aangemaakt is, kan angular het object verwerken in de html pagina met alle variabelen van dien:

```html
<h3>{{hero.name}} Details</h3>
<div><span>id: </span>{{hero.id}}</div>
<div><span>name: </span>{{hero.name}}</div>
```

Angular maakt ook gebruik van Pipes. Een pipe kan makelijk display data aanpassen. Je kunt de pipes gebruiken die Angular zelf mee geeft of je eigen pipes maken. Hier een klein voorbeeld in het gebruik van een pipe:

```html
<h2>{{hero.name | uppercase}} Details</h2>
```

Om de hero aan te kunnen passen moet er een two way binding aangemaakt worden. dit zorgt ervoor dat een gebruiker de data die in de component zit kan beinvloeden. Hier een voorbeeld:
```html
<div>
  <label for="name">Hero name: </label>
  <input id="name" [(ngModel)]="hero.name" placeholder="name">
</div>
``` 
Hiervoor moet nog wel de Forms module geimporteerd worden, zodat `ngModel` gebruikt kan worden. Zo herkend angular `ngModel` en kan het gebruikt worden.

## Tour of heroes 2 

In stap 2 wordt uitgelegd hoe je een lijst aan objecten kan displayen, een van deze objecten kan selecteren en de detail informatie hiervan kunt zien.

Omdat er nog geen database is opgesteld, wordt er een mock lijstje aangemaakt om mee te kunnen werken.

Met angular is het mogelijk om een for loopje toe te voegen aan een HTML pagina. Zo kan de lijst aan mock helden volledig gedisplayed worden. Hiervoor wordt `*ngFor` gebruikt:

```html
<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
```
Om daarnaast ook de heroes te kunnen selecteren/aanpassen kan er een even binding aan de list items toe worden gevoegd met `(click)="onSelect(hero)"`. Voordat deze binding echter zal werken zal er eerst een event handler aangemaakt moeten worden, deze ziet er als volgt uit:
```javascript
selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
```
Als dit dan verwerkt wordt in het stukje code dat geschreven was in ToH 1, ziet het er als volgt uit:
```html
<div *ngIf="selectedHero">
    <h2>{{selectedHero.name | uppercase}} Details</h2>
        <div><span>id: </span>{{selectedHero.id}}</div>
        <div>
            <label for="hero-name">Hero name: </label>
            <input id="hero-name" [(ngModel)]="selectedHero.name" placeholder="name">
        </div>
```
Zoals te zien is wordt de selected hero gebruikt die we in de eventhandler toewijzen. `*ngIf` zorgt ervoor dat er niet naar een ongedefinieerd object wijzen. Het checkt of er een `selectedHero` bestaat, zo ja, display de HTML code, zo niet, laat dan niks zien.

## Tour of heroes 3

Als een applicatie aan het groeien is, is het onhandig om alle features in een component te houden omdat het dan niet onderhoudbaar is. Daarom is het handiger als een groot component in meerdere subcomponenten worden onderverdeeld.

In dit geval zal de hero detail en input overgezet worden naar een HeroDetail component. Dit detail component wordt dan gebonden aan een input variable die gelijk staat aan het geselecteerde hero object:
```html
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
``` 
Dit hero object kan dan weer gebruikt worden in het detail component als volgt:

```javascript
@Input() hero?: Hero;
```

# Opdracht 2

## Tour of heroes 4

In ToH 4 staan services centraal. Maar waarom services? Services zijn singleton objecten die data vasthouden tijdens de lifecycle van de applicatie. Het doel van een service is het beschikbaar stellen van data tussen meerdere componenten in de Angular applicatie. Dit doen we door gebruik te maken van Angular's dependency injections.

Om een service aan te maken, kan het volgende commando gebruikt worden:
```
ng generate service hero
```
De service klassen krijgen de `@Injectable` decorator. Dit zorgt ervoor dat de klasse mee wordt genomen in het dependency injection system van Angular, ookwel de provider genoemd. De service wordt meegegeven aan de constructor van een component, zodat deze gebruikt kan worden in de klasse.

Om hier dan een kort voorbeeld bij te geven:
```javascript
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
```
Om de data later van een database of remote server te kunnen halen, moet de `getHeroes` methode asynchroon gemaakt worden. Het halen van de data zal dan gedaan worden met een Http get methode die een observable terug geeft. Observables zijn in essentie interfaces die data asynchroon door kan sturen tussen klassen.

Als een obeservable geimplementeerd is, kan een andere methode subscriben op deze observable om data op te halen:
```javascript
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
```

## Tour of heroes 5
In ToH 5 wordt de routing van een Angular applicatie besproken. 

Om de routing van de site te regelen moet een routing module aangemaakt worden. Dit kan met het volgende commando:
```
ng generate module app-routing --flat --module=app
```

Sinds ik routing had aangezet tijdens het genereren van de initieele applicatie, was dit niet nodig voor mij.

Routes kunnen makkelijk toegevoegd en gekoppeld worden aan components, door deze in de array aan routes toe te voegen:
```javascript
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];
```

Door het `<router-outlet>` element toe te voegen weet de router (in dit geval de app-routing module) waar de views gedisplayed moeten worden. Daarnaast kan er een nav balk toe worden gevoegd met een `routerLink` atribuut. dit zorgt ervoor dat de clickable knoppen of links naar de ingestelde route navigeren. Zie hier een voorbeeld:

```html
<nav>
  <a routerLink="/heroes">Heroes</a>
</nav>
```



## Tour of heroes 6


# Eindopdracht
