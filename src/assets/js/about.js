import Matter, { Composites } from 'matter-js';

export const aboutBall = () => {
    const wrap = document.querySelector('.about');
    const Engine = Matter.Engine,
                Render = Matter.Render,
                Runner = Matter.Runner,
                Bodies = Matter.Bodies,
                Common = Matter.Common,
                Composite = Matter.Composite,
                Constraint = Matter.Constraint,
                Event = Matter.Events;
    
    const engine = Engine.create(),
                runner = Runner.create(),
                world = engine.world;
    
    const render = Render.create({
        element: wrap,
        engine: engine,
        pixelRatio: window.devicePixelRatio,
        options: {
            width: innerWidth,
            height: innerHeight,
            wireframes: false,
            background: 'transparent'
        }
    });

    Render.run(render)
    Runner.run(runner, engine);

    engine.gravity.y = 0;

    const wallOption = {
        isStatic: true,
        render: {
            fillStyle: 'none'
        }
    }

    var rect01 = Bodies.rectangle(
        Common.random(100, innerWidth - 100),
        Common.random(100, innerHeight - 100),
        100, 100, {
            chamfer: { radius: 20 }
        }
    )

    var py = 300 + 100 * Math.sin(engine.timing.timestamp * 0.002);

    Composite.add(world, 
        [
            rect01,
            Bodies.rectangle(innerWidth / 2, innerHeight+20, innerWidth, 20, wallOption),
            Bodies.rectangle(innerWidth / 2, -20, innerWidth, 20, wallOption),
            Bodies.rectangle(-20, innerHeight / 2, 20, innerHeight, wallOption),
            Bodies.rectangle(innerWidth, innerHeight / 2, 20, innerHeight, wallOption),
        ]
    );
}