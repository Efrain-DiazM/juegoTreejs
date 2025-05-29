export default class LevelManager {
    constructor(experience) {
        this.experience = experience;
        this.currentLevel = 1;  // Inicias en el nivel 1
        this.totalLevels = 2;   // Total de niveles (puedes aumentar si agregas más)
    }

    nextLevel() {
        if (this.currentLevel < this.totalLevels) {
            this.currentLevel++;

            // 🔵 Limpiar escena antes de cargar el nuevo nivel
            this.experience.world.clearCurrentScene();

            // 🔵 Ahora sí cargar el siguiente nivel
            this.experience.world.loadLevel(this.currentLevel);

            // ⏳ Espera breve para que el nivel se cargue y luego reubicar al robot
            setTimeout(() => {
                this.experience.world.resetRobotPosition({ x: 5, y: 1, z: 5 }) // 🔁 Ajusta esta coordenada según el mundo nuevo
            }, 1000)
        }
    }


    resetLevel() {
        this.currentLevel = 1;
        this.experience.world.loadLevel(this.currentLevel);
    }


    getCurrentLevelTargetPoints() {
        return this.pointsToComplete?.[this.currentLevel] || 4;
    }

}
