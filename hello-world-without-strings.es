// tabwidth 8
//	str	dec	hex	base	offset	bin
//	H	 72	48	08	40	0100 1000
//	e	101	65	05	60	0110 0101
//	l	108	6c	0c	60	0110 1100
//	l	108	6c	0c	60	0110 1100
//	o	111	6f	0f	60	0110 1111
//	,	 44	2c	0c	20	0010 0001
//	 	 32	20	00	20	0010 0000
//	W	 87	57	17	40	0101 0111
//	o	111	6f	0f	60	0110 1111
//	r	114	72	12	60	0111 0010
//	l	108	6c	0c	60	0110 1100
//	d	100	64	04	60	0110 0100
//	!	 33	21	01	20	0010 0001
const
  helloWorld  =
    ( (...λ)  =>  γ =>
      String.fromCharCode(...λ) )
    (-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]|-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]|-~[]<<-~[]|-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]|-~[]<<-~[]|-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]|-~[]<<-~[]|-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]
    ,-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]  )

/*  Dev Numbers
({	0x01:-~[]
,	0x02:-~[]<<-~[]
,	0x04:-~[]<<-~[]<<-~[]
,	0x08:-~[]<<-~[]<<-~[]<<-~[]
,	0x10:-~[]<<-~[]<<-~[]<<-~[]<<-~[]
,	0x20:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]
,	0x40:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]
,	0x05:-~[]<<-~[]<<-~[]|-~[]
,	0x0c:-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]
,	0x0f:-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]|-~[]<<-~[]|-~[]
,	0x12:-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]
,	0x17:-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]|-~[]<<-~[]|-~[]
,	0x21:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]
,	0x2c:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]
,	0x48:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]
,	0x57:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]|-~[]<<-~[]|-~[]
,	0x64:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]
,	0x65:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]|-~[]
,	0x6c:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]
,	0x6f:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]|-~[]<<-~[]|-~[]
,	0x72:-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]<<-~[]<<-~[]<<-~[]|-~[]<<-~[]	})
*/
