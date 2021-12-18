//Some interesting properties of infinity
> Infinity * Infinity
= Infinity

> Infinity + Infinity
= Infinity

> Infinity - Infinity
= NaN

> Infinity / Infinity
= NaN

> 1234567890 / Infinity
= 0

//You can safely use comparison operators like === (see the next section) to determine whether a value is Infinity or -Infinity:
> let value1 = Infinity
> value1 === Infinity
= true

> let value2 = -Infinity
> value2 === -Infinity
= true

//However, be wary of using expressions in such comparisons:

> let value1 = Infinity
> value1 === Infinity * 123456789
= true