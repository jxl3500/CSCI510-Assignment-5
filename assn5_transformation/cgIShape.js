class cgIShape {
    constructor () {
        this.points = [];
        this.bary = [];
        this.indices = [];
    }
    
    addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {
        var nverts = this.points.length / 4;
        
        // push first vertex
        this.points.push(x0);  this.bary.push (1.0);
        this.points.push(y0);  this.bary.push (0.0);
        this.points.push(z0);  this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
        
        // push second vertex
        this.points.push(x1); this.bary.push (0.0);
        this.points.push(y1); this.bary.push (1.0);
        this.points.push(z1); this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++
        
        // push third vertex
        this.points.push(x2); this.bary.push (0.0);
        this.points.push(y2); this.bary.push (0.0);
        this.points.push(z2); this.bary.push (1.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
    }
}

class Cube extends cgIShape {
    
    constructor (subdivisions, x_len, y_len, z_len, x_pos, y_pos) {
        super();
        this.makeCube (subdivisions, x_len, y_len, z_len, x_pos, y_pos);
    }
    
    makeCube (subdivisions, x_len, y_len, z_len, x_pos, y_pos) {
        const x_length_sq = x_len / (subdivisions + 1);
        const y_length_sq = y_len / (subdivisions + 1);
        const z_length_sq = z_len / (subdivisions + 1);



        var cur_x = -x_len / 2 + x_pos;
        var cur_y = -y_len / 2 + y_pos;
        var cur_z = z_len / 2;


        for (let i = 0; i < subdivisions + 1; i++) {
            var x1 = cur_x + i * x_length_sq;
            var x2 = x1 + x_length_sq;
            for (let m = 0; m < subdivisions + 1; m++) {
                var y1 = cur_y + m * y_length_sq;
                var y2 = y1 + y_length_sq;
                this.addTriangle(x1, y1, cur_z, x2, y2, cur_z, x1, y2, cur_z); // 032
                this.addTriangle(x1, y1, cur_z, x2, y1, cur_z, x2, y2, cur_z); // 013
            }
        }


        cur_x = x_len / 2 + x_pos;
        cur_y = -y_len / 2 + y_pos;
        cur_z = z_len / 2;

        for (let i = 0; i < subdivisions + 1; i++) {
            var z1 = cur_z - i * z_length_sq;
            var z2 = z1 - z_length_sq;
            for (let m = 0; m < subdivisions + 1; m++) {
                var y1 = cur_y + m * y_length_sq;
                var y2 = y1 + y_length_sq;
                this.addTriangle(cur_x, y1, z1, cur_x, y2, z2, cur_x, y2, z1); // 173
                this.addTriangle(cur_x, y1, z1, cur_x, y1, z2, cur_x, y2, z2); // 157
            }
        }


        cur_x = -x_len / 2 + x_pos;
        cur_y = -y_len / 2 + y_pos;
        cur_z = -z_len / 2;

        for (let i = 0; i < subdivisions + 1; i++) {
            var x1 = cur_x + i * x_length_sq;
            var x2 = x1 + x_length_sq;
            for (let m = 0; m < subdivisions + 1; m++) {
                var y1 = cur_y + m * y_length_sq;
                var y2 = y1 + y_length_sq;
                this.addTriangle(x1, y1, cur_z, x2, y2, cur_z, x1, y2, cur_z); // 032
                this.addTriangle(x1, y1, cur_z, x2, y1, cur_z, x2, y2, cur_z); // 013
            }
        }


        cur_x = -x_len / 2 + x_pos;
        cur_y = -y_len / 2 + y_pos;
        cur_z = z_len / 2;

        for (let i = 0; i < subdivisions + 1; i++) {
            var z1 = cur_z - i * z_length_sq;
            var z2 = z1 - z_length_sq;
            for (let m = 0; m < subdivisions + 1; m++) {
                var y1 = cur_y + m * y_length_sq;
                var y2 = y1 + y_length_sq;
                this.addTriangle(cur_x, y1, z1, cur_x, y2, z2, cur_x, y2, z1); // 062
                this.addTriangle(cur_x, y1, z1, cur_x, y1, z2, cur_x, y2, z2); // 046
            }
        }

        cur_x = -x_len / 2 + x_pos;
        cur_y = y_len / 2 + y_pos;
        cur_z = z_len / 2;

        for (let i = 0; i < subdivisions + 1; i++) {
            var x1 = cur_x + i * x_length_sq;
            var x2 = x1 + x_length_sq;
            for (let m = 0; m < subdivisions + 1; m++) {
                var z1 = cur_z - m * z_length_sq;
                var z2 = z1 - z_length_sq;
                this.addTriangle(x1, cur_y, z1, x2, cur_y, z2, x1, cur_y, z2); // 276
                this.addTriangle(x1, cur_y, z1, x2, cur_y, z1, x2, cur_y, z2); // 237
            }
        }


        cur_x = -x_len / 2 + x_pos;
        cur_y = -y_len / 2 + y_pos;
        cur_z = z_len / 2;

        for (let i = 0; i < subdivisions + 1; i++) {
            var x1 = cur_x + i * x_length_sq;
            var x2 = x1 + x_length_sq;
            for (let m = 0; m < subdivisions + 1; m++) {
                var z1 = cur_z - m * z_length_sq;
                var z2 = z1 - z_length_sq;
                this.addTriangle(x1, cur_y, z1, x2, cur_y, z2, x1, cur_y, z2); //
                this.addTriangle(x1, cur_y, z1, x2, cur_y, z1, x2, cur_y, z2); // 015
            }
        }
    }
}


class Cylinder extends cgIShape {

    constructor (radialdivision,heightdivision, x_pos, y_pos) {
        super();
        this.makeCylinder (radialdivision,heightdivision, x_pos, y_pos);
    }
    
    makeCylinder (radialdivision,heightdivision, x_pos, y_pos){
        var height = 2.5;
        var radius = 1;
        var h_len = height / (heightdivision + 1);
        var theta = 360 / radialdivision;
        var x_lst = []
        var z_lst = [];
        var cur_y = height/2 + y_pos;

        // top
        for (let i = 0; i < radialdivision + 1; i++) {
            var x = Math.cos(radians(i * theta)) * radius + x_pos;
            var z = Math.sin(radians(i * theta)) * radius;
            x_lst.push(x);
            z_lst.push(z);
        }

        for (let i = 0; i < x_lst.length; i++) {
            if (i == x_lst.length - 1) {
                // top circle
                this.addTriangle(x_pos, cur_y, 0, x_lst[i], cur_y, z_lst[i], x_lst[0], cur_y, z_lst[0]);
                this.addTriangle(x_pos, -cur_y, 0, x_lst[i], -cur_y, z_lst[i], x_lst[0], -cur_y, z_lst[0]);

                for (let m = 0; m < heightdivision + 1; m++) {
                    var y1 = cur_y - m * h_len;
                    var y2 = y1 - h_len;
                    this.addTriangle( x_lst[i], y2, z_lst[i], x_lst[0], y1, z_lst[0], x_lst[i], y1, z_lst[i]);
                    this.addTriangle( x_lst[i], y2, z_lst[i], x_lst[0], y2, z_lst[0], x_lst[0], y1, z_lst[0]);

                }


            }
            else {
                this.addTriangle(x_pos, cur_y, 0, x_lst[i], cur_y, z_lst[i], x_lst[i + 1], cur_y, z_lst[i + 1]);
                this.addTriangle(x_pos, -cur_y, 0, x_lst[i], -cur_y, z_lst[i], x_lst[i + 1], -cur_y, z_lst[i + 1]);

                for (let m = 0; m < heightdivision + 1; m++) {
                    var y1 = cur_y - m * h_len;
                    var y2 = y1 - h_len;
                    this.addTriangle( x_lst[i], y2, z_lst[i], x_lst[i + 1], y1, z_lst[i + 1], x_lst[i], y1, z_lst[i]);
                    this.addTriangle( x_lst[i], y2, z_lst[i], x_lst[i + 1], y2, z_lst[i + 1], x_lst[i + 1], y1, z_lst[i + 1]);
                }

            }
        }
    }
}

class Cone extends cgIShape {

    constructor (radialdivision, heightdivision, x_pos, y_pos) {
        super();
        this.makeCone (radialdivision, heightdivision, x_pos, y_pos);
    }
    
    
    makeCone (radialdivision, heightdivision, x_pos, y_pos) {
        var height = 1.5;
        var radius = 1;
        var h_len = height / (heightdivision + 1);
        var theta = 360 / radialdivision;
        var x_lst = []
        var z_lst = [];
        var cur_y = height/2 + y_pos;

        for (let i = 0; i < radialdivision + 1; i++) {
            var x = Math.cos(radians(i * theta)) * radius;
            var z = Math.sin(radians(i * theta)) * radius;
            x_lst.push(x);
            z_lst.push(z);
        }
        for (let i = 0; i < x_lst.length; i++) {

            this.addTriangle(x_pos, -cur_y, 0, x_lst[i] + x_pos, -cur_y, z_lst[i], x_lst[i + 1] + x_pos, -cur_y, z_lst[i + 1]);
            for (let m = 1; m < heightdivision + 1; m++) {
                var y2 = -cur_y + m * h_len;
                var y1 = y2 - h_len;
                var fraction = (heightdivision + 1 - m) / (heightdivision + 1);
                var pre_fraction = (heightdivision + 1 - (m - 1)) / (heightdivision + 1);
                this.addTriangle(x_lst[i] * fraction + x_pos, y2, z_lst[i] * fraction, x_lst[i + 1] * pre_fraction + x_pos, y1, z_lst[i + 1] * pre_fraction, x_lst[i] * pre_fraction + x_pos, y1, z_lst[i] * pre_fraction);
                this.addTriangle(x_lst[i] * fraction + x_pos, y2, z_lst[i] * fraction, x_lst[i + 1] * fraction + x_pos, y2, z_lst[i + 1] * fraction, x_lst[i + 1] * pre_fraction + x_pos, y1, z_lst[i + 1] * pre_fraction);

                if (m == heightdivision) {
                    this.addTriangle(x_pos, height / 2 - y_pos, 0, x_lst[i] * fraction + x_pos, y2, z_lst[i] * fraction, x_lst[i + 1] * fraction + x_pos, y2, z_lst[i + 1] * fraction);
                }
            }

        }
    }
}
    
class Sphere extends cgIShape {

    constructor (slices, stacks) {
        super();
        this.makeSphere (slices, stacks);
    }
    
    makeSphere (slices, stacks) {
        // fill in your sphere code here
    }

}


function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

