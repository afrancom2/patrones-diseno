/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public ssd: string = 'ssd - not defined';
    public gpu?: string = 'gpu - not defined';

    displayConfiguration() {
        console.log(`Configuración de la computadora
            CPU: ${this.cpu}
            RAM: ${this.ram}
            SSD: ${this.ssd}
            GPU: ${this.gpu}
            `);
    }
}


class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCpu(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRam(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setSsd(ssd: string): ComputerBuilder {
        this.computer.ssd = ssd;
        return this;
    }

    setGpu(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build() {
        return this.computer;
    }
}

function main() {
    const basicComputer = new ComputerBuilder()
                            .setCpu('Intel core 2 duo')
                            .setRam('2 GB')
                            .setSsd('240 GB')
                            .setGpu('GTX')
                            .build();
    console.log(`%cComputadora basica:`, COLORS.blue);
    basicComputer.displayConfiguration();

    const gammingComputer = new ComputerBuilder()
                            .setCpu('Intel core i9')
                            .setRam('64 GB DDR5')
                            .setSsd('1000 GB')
                            .setGpu('RTX 4060')
                            .build();
    console.log(`%cComputadora gamer:`, COLORS.orange);
    gammingComputer.displayConfiguration();
}

main();