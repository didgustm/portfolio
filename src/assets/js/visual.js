import Matter from 'matter-js';

export const visualBall = () => {
    let wh = window.innerWidth;
    let particles = [];
    const visual = document.querySelector('.visual');
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
        element: visual,
        engine: engine,
        pixelRatio: window.devicePixelRatio,
        options: {
            width: window.innerWidth,
            height: visual.clientHeight,
            wireframes: false,
            background: '#272727'
        }
    });

    Render.run(render);
    Runner.run(runner, engine);

    engine.gravity.y = 0.9;
    const staticOptions = {
        restitution: 0.7,
        friction: 0,
        label: 'static'
    }

    // Triangle
    function triangle(w, h, width){
        let triA = Bodies.polygon(w * 0.8, h * 0.38, 3, width, {
            restitution: 0.7,
            friction: 0,
            label: 'static',
            chamfer: { radius: [10, 10, 10] }
        }),
            conA = Constraint.create({ 
                pointA: { x: w * 0.8, y: h * 0.38 },
                bodyB: triA,
                length: 0,
                render: {visible: false}
            });
        Composite.add(world, [ triA, conA ]);
    }
    // Circle
    function circle(w, h, radius){
        let ballB = Bodies.circle(w * 0.5, h * 0.44, radius, staticOptions),
            conB = Constraint.create({ 
                pointA: { x: w * 0.5, y: h * 0.44 },
                bodyB: ballB,
                pointB: { x: -50, y: -50 },
                length: 0,
                stiffness: 0.001,
                render: {visible: false}
            });
        Composite.add(world, [ ballB, conB ]);
    }
    // Cross
    function cross(w, h, size){
        let partA = Bodies.rectangle(w * 0.3, h * 0.3, size, size / 5, {
            label: 'cross'
        }),
        partB = Bodies.rectangle(w * 0.3, h * 0.3, size / 5, size, {
            render: partA.render,
            label: 'cross'
        }),
        crossA = Matter.Body.create({
            parts: [partA, partB],
            restitution: 0.8,
            friction: 0
        }),
        conD = Constraint.create({
            pointA: {x: w * 0.3, y: h * 0.3},
            bodyB: crossA,
            length: 0,
            render: {visible: false}
        });
        Matter.Body.rotate(crossA, Math.PI / 8);
        Composite.add(world, [ crossA, conD ]);
    }
    // Rectangle
    function rectangle(w, h, size){
        let boxA = Bodies.rectangle(w * 0.7, h * 0.78, size, size / 3, {
            restitution: 0.7,
            friction: 0.05,
            frictionStatic: 0.1,
            label: 'static',
            inertia: Infinity
        }),
        conC = Constraint.create({ 
            pointA: { x: w * 0.7, y: h * 0.78 },
            bodyB: boxA,
            length: 0,
            damping: 0.01,
            stiffness: 0.05,
            render: {visible: false}
        });
        Matter.Body.rotate(boxA, Math.PI / -5);
        Composite.add(world, [ boxA, conC ]);
    }
    // Particles
    function updateParticle(min, max){
        for(var i = 0; i < 15; i++){
            let x = Common.random(render.canvas.width * 0.4, render.canvas.width * 0.82),
                y = Common.random(-30, 30),
                size = Common.random(min, max);
            const p = Bodies.circle(x, y, size, {
                restitution: 0.4,
                friction: 0,
                label: 'particle'
            });
            particles.push(p)
        }
    }

    if(window.innerWidth <= 500){
        Composite.clear(world);

        triangle(visual.clientWidth, visual.clientHeight, 120);
        circle(visual.clientWidth * 0.5, visual.clientHeight * 1.1, 70);
        cross(visual.clientWidth, visual.clientHeight, 100);
        rectangle(visual.clientWidth, visual.clientHeight, 150);

        particles.length = 0;
        updateParticle(10, 13);
        Composite.add(world, particles);
    } else if(window.innerWidth <= 1000){
        
        Composite.clear(world);

        triangle(visual.clientWidth, visual.clientHeight, 140);
        circle(visual.clientWidth, visual.clientHeight, 90);
        cross(visual.clientWidth, visual.clientHeight, 110);
        rectangle(visual.clientWidth, visual.clientHeight, 180);

        particles.length = 0;
        updateParticle(8, 17);
        Composite.add(world, particles);
        
    } else if(window.innerWidth > 1000){
        Composite.clear(world);

        triangle(visual.clientWidth, visual.clientHeight, 170);
        circle(visual.clientWidth, visual.clientHeight, 110);
        cross(visual.clientWidth, visual.clientHeight, 150);
        rectangle(visual.clientWidth, visual.clientHeight, 220);

        particles.length = 0;
        updateParticle(10, 20);
        Composite.add(world, particles);
        
    }

    Event.on(engine, 'collisionStart', (e) => {
        const pairs = e.pairs;
        var bodyA = pairs[0].bodyA,
            bodyB = pairs[0].bodyB;
        
        if(bodyA.label == 'static'){
            bodyA.render.fillStyle = bodyB.render.fillStyle
        }
        if(bodyA.label == 'cross'){
            bodyA.parent.parts.forEach(x => {
                x.render.fillStyle = bodyB.render.fillStyle;
            })
        }
    })

    Event.on(render, 'afterRender', () => {
        particles.forEach(p => {
            if (p.position.y > render.canvas.height) {
                Matter.Body.setVelocity(p, { x: 0, y: Common.random(-30, 30) });
                var x = Common.random(
                    visual.clientWidth * 0.4, visual.clientWidth * 0.82
                );
                var y = Common.random(-render.canvas.height, 0);
                Matter.Body.setPosition(p, { x: x, y: -p.circleRadius });
            }
        })
    });

    function onResize(visual){
        let wh2 = window.innerWidth;
        render.canvas.width = window.innerWidth;
        render.canvas.height = visual.clientHeight;
        
        Event.on(render, 'afterRender', () => {
            wh = window.innerWidth
        });

        if(wh != wh2){
            if(window.innerWidth <= 500){
                Composite.clear(world);

                triangle(visual.clientWidth, visual.clientHeight, 120);
                circle(visual.clientWidth * 0.5, visual.clientHeight * 1.1, 70);
                cross(visual.clientWidth, visual.clientHeight, 100);
                rectangle(visual.clientWidth, visual.clientHeight, 150);

                particles.length = 0;
                updateParticle(10, 13);
                Composite.add(world, particles);
            } else if(window.innerWidth <= 1000){
                
                Composite.clear(world);

                triangle(visual.clientWidth, visual.clientHeight, 140);
                circle(visual.clientWidth, visual.clientHeight, 90);
                cross(visual.clientWidth, visual.clientHeight, 110);
                rectangle(visual.clientWidth, visual.clientHeight, 180);

                particles.length = 0;
                updateParticle(8, 17);
                Composite.add(world, particles);
                
            } else if(window.innerWidth > 1000){
                Composite.clear(world);

                triangle(visual.clientWidth, visual.clientHeight, 170);
                circle(visual.clientWidth, visual.clientHeight, 110);
                cross(visual.clientWidth, visual.clientHeight, 150);
                rectangle(visual.clientWidth, visual.clientHeight, 220);

                particles.length = 0;
                updateParticle(10, 20);
                Composite.add(world, particles);
                
            }
        }
    }

    window.addEventListener('resize', () => onResize(visual))
}