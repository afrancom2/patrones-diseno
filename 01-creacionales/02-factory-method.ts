/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
    prepare(): void;
}

class ChickenHamburger implements Hamburger {
    prepare(): void {
      console.log('Preparando una hamburguesa de %cpollo', COLORS.yellow);
      
    }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
      console.log('Preparando hamburguesa de %cres', COLORS.purple);
    }
}

class BeansHamburger implements Hamburger {
    prepare(): void {
      console.log('Preparando hamburguesa de %cfrijol', COLORS.red);
    }
}

abstract class Restaurant {
    protected abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }
}

class ChickenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

class BeansRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeansHamburger();
  }
}

function main() {
    let restaurant: Restaurant;

    const burgerType = prompt('Que tipo de hamburguesa quieres? (chicken/beef/beans)');
    switch (burgerType) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
        break;

        case 'beef':
            restaurant = new BeefRestaurant();
        break;

        case 'beans':
            restaurant = new BeansRestaurant();
        break;
        
        default:
            throw new Error('Opcion no valida');
            
    }

    restaurant.orderHamburger();
}

main();