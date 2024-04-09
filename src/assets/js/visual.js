import Matter, { Composites } from 'matter-js';

export const visualBall = () => {
    let ww = innerWidth > 1920? 1920: innerWidth, hh = innerHeight;
    let particles = [];
    let points = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]];
    let colors = ['#ED6075', '#C75B8E', '#965C97', '#645B8E', '#3E5476', '#2F4858']
    const visual = document.querySelector('.visual_in');
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
            width: innerWidth,
            height: innerHeight,
            wireframes: false,
            background: 'transparent'
        }
    });
    
    Render.run(render)
    Runner.run(runner, engine);
    
    //engine.gravity.y = 1.02

    let triA, penta, circleA, circleB, crossA, crossB, barA, barB, barC, stackA, stackB, stackC;

    //Composite.clear(world);

    drawing();

    document.querySelectorAll('.visualBall').forEach(x => x.setAttribute('r', circleA.body.circleRadius));

    Event.on(engine, 'collisionStart', (e) => {
        const pairs = e.pairs;
        var bodyA = pairs[0].bodyA,
            bodyB = pairs[0].bodyB;
        if(bodyA.label == 'static'){
            bodyA.render.fillStyle = bodyB.render.fillStyle
        }
        if(bodyB.label == 'static'){
            bodyB.render.fillStyle = bodyA.render.fillStyle
        }
        if(bodyA.label == 'cross'){
            bodyA.parent.parts.forEach(x => {
                x.render.fillStyle = bodyB.render.fillStyle;
            })
        }
    });

    Event.on(engine, 'afterUpdate', (e) => {
        let arr = e.source.detector.bodies,
        clipTri = arr.filter(arr => arr.id == 'triangle'),
        clipR = arr.filter(arr => arr.id == 'circleA'),
        clipC = arr.filter(arr => arr.id == 'crossA');

        document.querySelectorAll('.visualBall').forEach(x => {
            x.setAttribute('cx', clipR[0].position.x);
            x.setAttribute('cy', clipR[0].position.y);
            x.setAttribute('fill', clipR[0].render.fillStyle)
        })

        let newPoints = points;
        newPoints.map((e, idx) => {
            newPoints[idx] = [clipTri[0].vertices[idx].x, clipTri[0].vertices[idx].y] 
        });
        document.querySelector('.visualTri').setAttribute('points', newPoints.join(' '));
        document.querySelector('.visualTri').setAttribute('fill', clipTri[0].render.fillStyle);

        document.querySelector('.crossA1').setAttribute('fill', clipC[0].render.fillStyle);
        document.querySelector('.crossA1').setAttribute('d', `M${clipC[0].vertices[0].x},${clipC[0].vertices[0].y} L${clipC[0].vertices[3].x},${clipC[0].vertices[3].y} ${clipC[0].vertices[4].x},${clipC[0].vertices[4].y} ${clipC[0].vertices[7].x},${clipC[0].vertices[7].y}`);
        document.querySelector('.crossA2').setAttribute('fill', clipC[0].render.fillStyle);
        document.querySelector('.crossA2').setAttribute('d', `M${clipC[0].vertices[1].x},${clipC[0].vertices[1].y} L${clipC[0].vertices[2].x},${clipC[0].vertices[2].y} ${clipC[0].vertices[5].x},${clipC[0].vertices[5].y} ${clipC[0].vertices[6].x},${clipC[0].vertices[6].y}`);
    });

    Event.on(render, 'afterRender', (e) => {
        particles.forEach(p => {
            if((Matter.Body.getSpeed(p).toFixed(1) <= 0.4 && p.position.y + p.circleRadius >= innerHeight) || p.position.y > innerHeight){
                var posx = Common.random(100, innerWidth - 100);
                Matter.Body.setVelocity(p, { x:0, y:0 });
                Matter.Body.setPosition(p, { x: posx, y: -p.circleRadius });
            }
        })
    });    

    function Polygon(x, y, sides, width, r=0){
        this.body = Bodies.polygon(x, y, sides, width, {
            restitution: 0,
            label: 'static',
            chamfer: {radius: [r]},
            render: {
                fillStyle: colors[Math.round(Common.random(0, 5))]
            }
        });
        this.con = Constraint.create({
            pointA: {x, y},
            bodyB: this.body,
            length: 0,
            render: { visible: false }
        });
        Composite.add(world, [this.body, this.con]);
    }

    function Circle(x, y, r){
        this.body = Bodies.circle(x, y, r, {
            restitution: 0,
            label: 'static',
            render: {
                fillStyle: colors[Math.round(Common.random(0, 5))]
            }
        });
        this.con = Constraint.create({
            pointA: {x, y},
            bodyB: this.body,
            pointB: { x: -50, y: -50 },
            length: 0,
            stiffness: 0.001,
            render: { visible: false }
        });
        Composite.add(world, [ this.body, this.con ]);
    }
    
    function Rectangle(x, y, w, h, angle, r = 0, inertia=Infinity){
        this.body = Bodies.rectangle(x, y, w, h, {
            label: 'static',
            restitution: 0,
            friction: 0.1,
            frictionStatic: 0.1,
            chamfer: {radius: [r]},
            inertia,
            render: {
                fillStyle: colors[Math.round(Common.random(0, 5))]
            }
        });
        this.con = Constraint.create({
            pointA: { x, y },
            pointB: {x: angle, y: -10},
            bodyB: this.body,
            length: 0,
            render: { visible: false }
        });
        Composite.add(world, [ this.body, this.con ]);
    }
    
    function Cross(x, y, w, h){
        this.partA = Bodies.rectangle(x, y, w, h, {
            label: 'cross',
            render: {
                fillStyle: colors[Math.round(Common.random(0, 5))]
            }
        });
        this.partB = Bodies.rectangle(x, y, h, w, {
            render: this.partA.render,
            label: 'cross'
        });
        this.body = Matter.Body.create({
            restitution: 0,
            parts: [ this.partA, this.partB ],
            inertia: 1920 * 5
        });
        this.con = Constraint.create({
            pointA: { x, y },
            bodyB: this.body,
            length: 0,
            render: { visible: false }
        });
        Composite.add(world, [ this.body, this.con ])
    }

    function Stack(x, y, row, column, rgap, cgap, r){
        this.stack = Composites.stack(x, y, row, column, rgap, cgap, (x, y) => {
            return Bodies.circle(x, y, r, {
                restitution: 0.8,
                render: {
                    fillStyle: '#2F4858'
                },
                isStatic: true
            })
        });
        Composite.add(world, this.stack)
    }
    
    function updateParticle(min, max){
        for(var i = 0; i < 15; i++){
            let x = Common.random(100, ww - 100),
                y = Common.random(-30, 30),
                size = Common.random(min, max),
                num = Math.round(Common.random(0, 5));
            const p = Bodies.circle(x, y, size, {
                restitution: 0.8,
                friction: 0,
                label: 'particle',
                render: {
                    fillStyle: colors[num]
                }
            });
            particles.push(p)
        }
    }

    function setDefault(min, max){
        triA.body.id = 'triangle';
        circleA.body.id = 'circleA';
        crossA.body.id = 'crossA';
        Matter.Body.rotate(crossA.body, Math.PI / 8);
        //Matter.Body.rotate(barA.body, Math.PI / -4);
        Matter.Body.rotate(barB.body, Math.PI / 7);

        particles.length = 0;
        updateParticle(min, max);
        Composite.add(world, particles);

        Composite.add(world, Bodies.rectangle(innerWidth / 2, innerHeight+10, innerWidth, 20, { 
            isStatic: true,
            render: {
                fillStyle: 'none'
            }
        }))
    }

    function drawing(){
        if(innerWidth < 401){
            triA = new Polygon(innerWidth*0.8, innerHeight*0.34, 3, 90, 10);
            circleA = new Circle(innerWidth*0.5, innerHeight*0.5, 65);
            crossA = new Cross(innerWidth*0.2, innerHeight*0.2 , 130, 20);
            barB = new Rectangle(innerWidth*0.2, innerHeight*0.8, 130, 20, -7, 10, 20000);
            barC = new Rectangle(innerWidth*0.9, innerHeight*0.6, 40, 40, 0, 6, 20000);
            stackB = new Stack(innerWidth * 0.53, innerHeight * 0.1, 5, 2, 23, 23, 2);
            stackC = new Stack(innerWidth * 0.7, innerHeight * 0.8, 3, 3, 25, 25, 2);
            
            Composite.rotate(stackB.stack, Math.PI / 28, { x:innerWidth * 0.6, y:innerHeight * 0.1 });
            Composite.rotate(stackC.stack, Math.PI / 6, { x:innerWidth * 0.7, y:innerHeight * 0.85 })
    
            setDefault(7, 10)

        }else if(innerWidth < 768){
            triA = new Polygon(innerWidth*0.8, innerHeight*0.32, 3, innerWidth*0.18, 10);
            circleA = new Circle(innerWidth*0.5, innerHeight*0.5, 80);
            crossA = new Cross(innerWidth*0.2, innerHeight*0.2 , 160, 25);
            barB = new Rectangle(innerWidth*0.2, innerHeight*0.8, 160, 30, -7, 10, 20000);
            barC = new Rectangle(innerWidth*0.9, innerHeight*0.6, 50, 50, 0, 6, 20000);
            stackB = new Stack(innerWidth * 0.53, innerHeight * 0.1, 5, 2, 30, 30, 2);
            stackC = new Stack(innerWidth * 0.7, innerHeight * 0.8, 3, 3, 30, 30, 2);
            
            Composite.rotate(stackB.stack, Math.PI / 28, { x:innerWidth * 0.6, y:innerHeight * 0.1 });
            Composite.rotate(stackC.stack, Math.PI / 6, { x:innerWidth * 0.7, y:innerHeight * 0.85 })
    
            setDefault(8, 13)
        } else if(innerWidth < 1300){
            triA = new Polygon(innerWidth*0.7, innerHeight*0.38, 3, innerWidth*0.12, 10);
            penta = new Polygon(innerWidth*0.14, innerHeight*0.2, 5, innerWidth*0.022);
            circleA = new Circle(innerWidth*0.5, innerHeight*0.5, innerWidth*0.08);
            circleB = new Circle(innerWidth*0.85, innerHeight*0.2, innerWidth*0.023);
            crossA = new Cross(innerWidth*0.3, innerHeight*0.3 , innerWidth*0.12, innerWidth*0.12 / 6);
            barA = new Rectangle(innerWidth*0.84, innerHeight*0.8, innerWidth*0.13, innerWidth*0.13/4, 5, 10, 20000);
            barB = new Rectangle(innerWidth*0.2, innerHeight*0.8, innerWidth*0.13, innerWidth*0.13/4, -7, 10, 20000);
            barC = new Rectangle(innerWidth*0.7, innerHeight*0.7, innerWidth*0.04, innerWidth*0.04, 0, 6, 20000);
            stackA = new Stack(innerWidth * 0.07, innerHeight * 0.35, 4, 6, 40, 35, 2);
            stackB = new Stack(innerWidth * 0.53, innerHeight * 0.1, 7, 2, 40, 38, 3);
            stackC = new Stack(innerWidth * 0.6, innerHeight * 0.75, 3, 3, 45, 40, 2);
    
            Composite.rotate(stackB.stack, Math.PI / 28, { x:innerWidth * 0.6, y:innerHeight * 0.1 })
            Composite.rotate(stackC.stack, Math.PI / 6, { x:innerWidth * 0.6, y:innerHeight * 0.8 })
    
            setDefault(10, 15)
    
        } else if(innerWidth >= 1300){
            triA = new Polygon(innerWidth*0.7, innerHeight*0.38, 3, innerWidth*0.095, 10);
            penta = new Polygon(innerWidth*0.14, innerHeight*0.2, 5, innerWidth*0.022);
            circleA = new Circle(innerWidth*0.5, innerHeight*0.5, innerWidth*0.06);
            circleB = new Circle(innerWidth*0.85, innerHeight*0.2, innerWidth*0.023);
            crossA = new Cross(innerWidth*0.3, innerHeight*0.35, innerWidth*0.1, innerWidth*0.1 / 5);
            barA = new Rectangle(innerWidth*0.84, innerHeight*0.8, innerWidth*0.13, innerWidth*0.13/4, 5, 10, 20000);
            barB = new Rectangle(innerWidth*0.2, innerHeight*0.8, innerWidth*0.13, innerWidth*0.13/4, -7, 10, 20000);
            barC = new Rectangle(innerWidth*0.7, innerHeight*0.7, innerWidth*0.04, innerWidth*0.04, 0, 6, 20000);
            stackA = new Stack(innerWidth * 0.08, innerHeight * 0.35, 5, 6, 45, 35, 2);
            stackB = new Stack(innerWidth * 0.53, innerHeight * 0.1, 7, 2, 45, 38, 3);
            stackC = new Stack(innerWidth * 0.6, innerHeight * 0.75, 3, 3, 45, 40, 2);
    
            Composite.rotate(stackB.stack, Math.PI / 28, { x:innerWidth * 0.6, y:innerHeight * 0.1 })
            Composite.rotate(stackC.stack, Math.PI / 6, { x:innerWidth * 0.6, y:innerHeight * 0.8 })
    
            setDefault(15, 20)
        }

        
    }

    window.addEventListener('resize', () => {
        let w2 = innerWidth;
        Event.on(render, 'afterRender', () => {
            ww = innerWidth
        });

        if(ww != w2){
            render.canvas.width = innerWidth;
            render.canvas.height = innerHeight;

            Composite.clear(world);
            drawing();

            document.querySelectorAll('.visualBall').forEach(x => x.setAttribute('r', circleA.body.circleRadius));
        }
    })
}