import 'package:easy_park/colors/color.dart';
import 'package:easy_park/pages/view.dart';
import 'package:flutter/material.dart';

class Card_Prov extends StatefulWidget {
  const Card_Prov(
      {super.key,
      required this.nombre,
      required this.direccion,
      required this.id,
      required this.latitud,
      required this.longitud,
      required this.distancia,
      required this.horario,
      required this.cantidad,
      required this.imagen,
      required this.precio});

  final String nombre;
  final String direccion;
  final int id;
  final double latitud;
  final double longitud;
  final double distancia;
  final String horario;
  final int cantidad;
  final String imagen;
  final int precio;

  @override
  State<Card_Prov> createState() => _Card_ProvState();
}

class _Card_ProvState extends State<Card_Prov> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => Seccion(
                id: widget.id,
                nombre: widget.nombre,
                direccion: widget.direccion,
                latitud: widget.latitud,
                longitud: widget.longitud,
                horario: widget.horario,
                cantidad: widget.cantidad,
                imagen: widget.imagen,
                precio: widget.precio)));
      },
      child: SizedBox(
        height: 130,
        //width: 700,
        child: Card(
          shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.all(
              Radius.circular(10.0),
            ),
          ),
          elevation: 2,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Expanded(
                flex: 2,
                child: Container(
                  margin: const EdgeInsets.all(5.0),
                  height: 120,
                  width: 120,
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: NetworkImage(
                          "${widget.imagen}"), //AssetImage('assets/Parking.jpg'),
                      fit: BoxFit.cover,
                    ),
                    color: claro,
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              Expanded(
                flex: 3,
                child: Padding(
                  padding: const EdgeInsets.only(
                    left: 8.0,
                  ),
                  child: SizedBox(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        ListTile(
                          title: Text(
                            "${widget.nombre}",
                            style: const TextStyle(
                              fontSize: 15.0,
                              fontFamily: 'Montserrat',
                              fontWeight: FontWeight.bold,
                              color: Color.fromARGB(255, 78, 76, 76),
                            ),
                          ),
                          subtitle: Text(
                            "${widget.direccion}",
                            style: const TextStyle(
                              fontSize: 12.0,
                              fontFamily: 'Montserrat',
                              //fontWeight: FontWeight.bold,
                              color: Color.fromARGB(255, 78, 76, 76),
                            ),
                          ),
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            Text(
                              "\$${widget.precio}",
                              style: TextStyle(
                                fontSize: 13.0,
                                fontFamily: 'Montserrat',
                                fontWeight: FontWeight.bold,
                                color: azulclaro,
                              ),
                            ),
                            Text(
                              " x hora",
                              style: TextStyle(
                                fontSize: 13.0,
                                fontFamily: 'Montserrat',
                                fontWeight: FontWeight.w300,
                                color: azulclaro,
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              Expanded(
                flex: 1,
                child: SizedBox(
                  child: Center(
                    child: Text(
                      "${widget.distancia.toStringAsFixed(1)} km",
                      style: const TextStyle(
                        fontSize: 14.0,
                        fontFamily: 'Montserrat',
                        fontWeight: FontWeight.bold,
                        color: Colors.orangeAccent,
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
